import { createSlice } from '@reduxjs/toolkit'
import { loadState } from '../localstorage';

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        value: (loadState() && loadState().userDataStore && loadState().userDataStore.value ) || null,
    },
    reducers: {
        updateUserData: (state, action) =>{
            state.value = action.payload;
        },
        deleteUserData: (state) =>{
            state.value = null;
        },
    },
})

export const { updateUserData, deleteUserData } = userDataSlice.actions

export default userDataSlice.reducer