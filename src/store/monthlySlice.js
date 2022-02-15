import { createSlice} from '@reduxjs/toolkit';


const initialState = [];
 
const monthlySlice = createSlice({
    name: 'theState',
    initialState: initialState,
    reducers: {
        addNewMonth(state, action) {
            state.push(
                {
                    year: action.payload.year,
                    month: action.payload.month,
                    income: action.payload.monthlyIncome, 
                    expectedExpenses: action.payload.expectedExpenses
                }
            )
        }
    }
});

export const monthlySliceActions = monthlySlice.actions


export default monthlySlice.reducer