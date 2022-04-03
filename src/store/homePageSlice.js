import { createSlice} from '@reduxjs/toolkit';


const initialState = {
    isModalOpen: false,

    years: []
}

const homePageStateSlice = createSlice({
    
    name: 'homePageStateSlice',
    initialState: initialState,
    reducers: {
        toggleModalOpen(state) {
            state.isModalOpen = !state.isModalOpen
        },
        addYear(state, payload) {
            state.years.push(payload)
        }
    }
});

export const homePageStateSliceActions = homePageStateSlice.actions


export default homePageStateSlice.reducer