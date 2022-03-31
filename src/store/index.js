import { configureStore} from '@reduxjs/toolkit';
import stateReducer from '../store/stateSlice';
import homePageStateReducer from '../store/homePageSlice';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import monthlyReducer from '../store/monthlySlice';
import receiptsReducer from '../store/receiptsSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import storage from './storage';

    

    const reducers = combineReducers({
        stateSlice: stateReducer,
        homePageStateSlice: homePageStateReducer,
        monthlySlice: monthlyReducer,
        receiptsSlice: receiptsReducer
    });

    const persistConfig = {
        key: 'root', 
        storage
    }

    const persistedReducer = persistReducer(persistConfig, reducers);
    

    export const store = configureStore({
        
            reducer: persistedReducer,
            devTools: process.env.NODE_ENV !== 'production',
            middleware: [thunk],
    });
    export const persistor = persistStore(store);
    



