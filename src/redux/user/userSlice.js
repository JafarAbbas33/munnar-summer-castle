import { current, createSlice } from '@reduxjs/toolkit'
import { eraseCookie } from '../../utils/cookieUtils';

const initialState = {
    value: {
        "uid": null,
        "name": '[Undefined]',
        "email": '[Undefined]',
        "is_superuser": false,
        "profile_photo": import.meta.env.VITE_BACKEND_BASE_URL + '/media/static/default_profile_photo.png',
        "profile_banner_photo": import.meta.env.VITE_BACKEND_BASE_URL + '/media/static/default_profile_banner_photo.png',
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, user) => {
            user = user.payload;
            let hasChanges = false;
            let oldState = structuredClone(current(state.value));
            // Object.entries(user).forEach(([key, val]) => { if (oldState.hasOwnProperty(key) && oldState[key] !== val) { oldState[key] = val; hasChanges = true; } })
            Object.entries(user).forEach(([key, val]) => { if (Object.prototype.hasOwnProperty.call(oldState, key) && oldState[key] !== val) { oldState[key] = val; hasChanges = true; } })
            
            if (hasChanges) {
                state.value = structuredClone(oldState);
            }
        },

        setProfilePicture: (state, url) => {
            state.value.profile_photo = url.payload;
        },

        setProfileBannerPicture: (state, url) => {
            state.value.profile_banner_photo = url.payload;
        },

        authSignOut: (state) => {
            eraseCookie('access_token');
            eraseCookie('refresh_token');
            state.value = initialState;
        },
    },
})

export const { setProfilePicture, setProfileBannerPicture, setUser, authSignOut } = userSlice.actions
export default userSlice.reducer
