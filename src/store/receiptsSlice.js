import { createSlice} from '@reduxjs/toolkit';


const initialState = [];
 
const receiptsSlice = createSlice({
    name: 'receiptsState',
    initialState: initialState,
    reducers: {
        addReceipt(state, action) {
            state.push({
                date: action.payload.date,
                amount: action.payload.amount,
                category: action.payload.category,
                comments: action.payload.comments,
                keyPass: action.payload.keyPass
            })
        },
        deleteReceipt(state, action) {
            state.forEach((e, index) => {
                let passReceipt = e.date + e.amount + e.category + e.comments + e.keyPass;
                console.log('ReceiptsState:  ' + passReceipt);

                if(passReceipt === action.payload) {
                    state.splice(index, 1);
                }
            })
        }
    }
});

export const receiptsSliceActions = receiptsSlice.actions


export default receiptsSlice.reducer