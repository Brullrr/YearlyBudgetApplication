import { createSlice} from '@reduxjs/toolkit';


const initialState = {theState: 'yo'}
 
const stateSlice = createSlice({
    name: 'theState',
    initialState: initialState,
    reducers: {
        changeNameToYolo(state) {
            state.theState = 'Yolo'
        },
        changeNameToYoro(state) {
            state.theState = 'Yoro'
        }
    }
});

export const stateSliceActions = stateSlice.actions


export default stateSlice.reducer