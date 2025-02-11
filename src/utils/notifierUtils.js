// import store from '../redux/store';
// import { showNotifier } from '../redux/notifier/notifierSlice';

export const notify = (message) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "info",
        title: message
      });
    // console.log('Notifying...', message);
    // store.dispatch(showNotifier(message));
}











// import { useDispatch } from 'react-redux'
// // import { getGlobalVariable } from "./globalsUtils";

// export const notify = (message) => {
//     const dispatch = useDispatch();
//     console.log('Notifying...', message);
    
//     dispatch(showNotifier(message));
// }






// export function notify(message) {
//     getGlobalVariable('setIsNotifierOpen')(true);
// }

// export function _notifierClosedHook() {
//     getGlobalVariable('setIsNotifierOpen')(false);
// }