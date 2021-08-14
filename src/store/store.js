import { configureStore } from '@reduxjs/toolkit'
import { saveState } from './localstorage';
import boxSettingsSlice from './slices/boxSettingsSlice';
import userDataSlice from './slices/userDataSlice'



const Store = configureStore({
    reducer: {
        userDataStore: userDataSlice,
        boxSettingsStore: boxSettingsSlice,
    },
});

Store.subscribe(()=>{
    saveState(Store.getState());
});

export default Store;