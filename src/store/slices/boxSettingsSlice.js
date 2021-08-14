import { createSlice } from '@reduxjs/toolkit'
import { loadState } from '../localstorage';

export const boxSettingsSlice = createSlice({
    name: 'boxSettings',
    initialState: {
        value: (loadState() && loadState().boxSettingsStore && loadState().boxSettingsStore.value) || null,
    },
    reducers: {
        updateBoxSettings: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { updateBoxSettings } = boxSettingsSlice.actions

export default boxSettingsSlice.reducer