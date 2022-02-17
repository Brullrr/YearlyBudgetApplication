import classes from './ReceiptsModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { receiptsSliceActions } from '../../../store/receiptsSlice';

const ReceiptsModal = (props) => {

    const dispatch = useDispatch()
    
    let receiptsArrayAll = useSelector(state => state.receiptsSlice);
    
    let receiptsArray = [];
    receiptsArrayAll.forEach(element => {
        if(element.date >= props.minDate && element.date <= props.maxDate ) {
            receiptsArray.push(element);
        }
    });

    const deleteReceipt = (e, index) => {
        let passwordReceipt = e.date + e.amount + e.category + e.comments + index;
        dispatch(receiptsSliceActions.deleteReceipt(passwordReceipt))
    }

    return (
        <div className={classes.ReceiptsModal}>
            <div  className={classes.Backdrop} onClick={props.toggleReceiptsModal} /> 
            <div className={classes.ReceiptsHolder}>
                <div className={classes.Receipt}><p>Date</p><p>Amount</p><p>Category</p><p>Comments</p></div>

            { 
                receiptsArray.map( (e, index) => {
                    let originalString = e.date.trim()
                    let trimThis = props.year + '-' + props.month + '-';
                    console.log(trimThis)
                    let date = originalString.replace(trimThis, '');
                    return (
                        <div key={ e + index} onClick={() => {deleteReceipt(e, index)}} className={classes.Receipt}><p>{date}</p><p>{e.amount}</p><p>{e.category}</p><p>{e.comments}</p></div>
                    )
                })
            }


            </div>
        </div>
    )
}

export default ReceiptsModal;