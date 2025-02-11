import { configureStore } from '@reduxjs/toolkit'
import navigationPopupReducer from './navigation_popup/navigationPopupSlice'
import notifierReducer from './notifier/notifierSlice'
import userReducer from './user/userSlice'

const store = configureStore({
  reducer: {
    navigationPopup: navigationPopupReducer,
    notifier: notifierReducer,
    user: userReducer
  },
})

export default store;