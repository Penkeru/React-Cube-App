import { configureStore } from '@reduxjs/toolkit'
import { saveState } from './localstorage';
import userDataSlice from './slices/userDataSlice'



const Store = configureStore({
    reducer: {
        userDataStore: userDataSlice,
    },
});

Store.subscribe(()=>{
    saveState(Store.getState());
});

export default Store;