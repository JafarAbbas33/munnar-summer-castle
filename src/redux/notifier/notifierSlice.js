import { createSlice } from '@reduxjs/toolkit'

export const notifierSlice = createSlice({
  name: 'notifier',
  initialState: {
    value: { state: 'close', message: '' },
  },
  reducers: {
    showNotifier: (state, message) => {
      state.value = { state: 'open', message: message.payload }
    },
    hideNotifier: (state) => {
      state.value = { state: 'close', message: state.value.message }
    },
  },
})

// Action creators are generated for each case reducer function
export const { showNotifier, hideNotifier } = notifierSlice.actions

export default notifierSlice.reducer