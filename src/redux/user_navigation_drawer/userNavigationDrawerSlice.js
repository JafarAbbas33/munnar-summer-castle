import { current, createSlice } from '@reduxjs/toolkit'

export const userNavigationDrawerSlice = createSlice({
    name: 'navigation_popup',
    initialState: {
        value: {
            "uid": null,
            "name": '[Undefined]',
            "email": '[Undefined]',
            "profile_photo": import.meta.env.VITE_BACKEND_BASE_URL + '/media/static/default_profile_photo.png',
        }
    },
    reducers: {
        setUser: (state, user) => {
            user = user.payload;
            let hasChanges = false;
            let oldState = structuredClone(current(state.value));
            // console.log('User state:', oldState);
            // console.log('User state (user):', user);
            
            
            Object.entries(user).forEach(([key, val]) => { if (oldState.hasOwnProperty(key) && oldState[key] !== val) { oldState[key] = val; hasChanges = true; } })
            
            if (hasChanges) {
                state.value = structuredClone(oldState);
            }
        },

        setProfilePicture: (state, url) => {
            state.value = url.payload
        },
    },
})

export const { setProfilePicture, setUser } = userNavigationDrawerSlice.actions
export default userNavigationDrawerSlice.reducer