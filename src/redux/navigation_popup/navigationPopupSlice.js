import { createSlice } from '@reduxjs/toolkit'

export const navigationPopupSlice = createSlice({
    name: 'navigation_popup',
    initialState: {
        value: 'open',
    },
    reducers: {
        open: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            state.value = 'open'
        },
        closeNavPopup: (state) => {
            state.value = 'close'
        },
        // incrementByAmount: (state, action) => {
        //   state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { open, closeNavPopup } = navigationPopupSlice.actions

export default navigationPopupSlice.reducer