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
        },
        updateIncome(state, action) {
            
            state.forEach((e, index) => {
                let whatMonth = e.year + e.month;
                let newIncome = action.payload.income;
                newIncome = newIncome || 0;
                
                if(whatMonth === action.payload.year + action.payload.month) {
                    state[index].income = newIncome
                }
            })
        }
    }
});

export const monthlySliceActions = monthlySlice.actions


export default monthlySlice.reducer