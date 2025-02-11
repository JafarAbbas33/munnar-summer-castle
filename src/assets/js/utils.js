function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

async function _make_request(endpoint, payload) {
    if (!('headers' in payload)) {
        payload['headers'] = {}
    }
    payload['headers']['X-CSRFToken'] = getCookie('csrftoken');
    payload['headers']['Authorization'] = `Bearer ${getCookie('access_token')}`;
    payload['mode'] = 'same-origin';

    let response = await fetch(endpoint, payload);
    // console.log(endpoint, payload);
    // console.log(response);
    return await (response).json();
}

async function make_request(endpoint, payload={}) {
    let resp = await _make_request(endpoint, payload);
    
    if (!(resp['status'] === "error" && resp['message'] === "Token is invalid.")) { return resp; }

    console.log('Access token expired. Fetching new token.');
    resp = await (await fetch('api/token/refresh/', { method: 'POST', headers: {
        "X-CSRFToken": getCookie('csrftoken'),
        "Content-Type": "application/json",
    }, body: JSON.stringify({'refresh': getCookie('refresh_token')}) })).json();

    if (!(resp['detail'] === "Token is invalid or expired" && resp['code'] === "token_not_valid")) {
        setCookie('access_token', resp['access']);
        return await _make_request(endpoint, payload);
    }

    console.log('Error occured. Please refresh the page.');
    return {}
}