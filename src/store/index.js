import { configureStore } from '@reduxjs/toolkit';
import stateReducer from '../store/stateSlice';
import homePageStateReducer from '../store/homePageSlice';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import monthlyReducer from '../store/monthlySlice';



        const reducers = combineReducers({
            stateSlice: stateReducer,
            homePageStateSlice: homePageStateReducer,
            monthlySlice: monthlyReducer,
        });

        

    const store = configureStore({
        
            reducer: reducers,
            devTools: process.env.NODE_ENV !== 'production',
            middleware: [thunk],
    });

    




export default store;