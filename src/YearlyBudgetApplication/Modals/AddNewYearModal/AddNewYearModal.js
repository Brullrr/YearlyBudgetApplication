import classes from './AddNewYearModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { homePageStateSliceActions } from '../../../store/homePageSlice';
import { useState } from 'react';

const AddNewYearModal = (props) => {

    const [inputValue, setInputValue] = useState('');
    const changeInputValue = (e) => {
        setInputValue(e.target.value)

        let verified = verifyIfYearIsValid(e.target.value);

        if(verified) {
            props.valid();
        } else {
            props.invalid();
        }
    }

    const dispatch = useDispatch();

    const isModalOpen = useSelector(state => state.homePageStateSlice.isModalOpen);
    const yearsArray = useSelector(state => state.homePageStateSlice.years)
    
    const toggleModal = () => {
        dispatch(homePageStateSliceActions.toggleModalOpen())
    }

    const invalidBorder =  !props.isValid ? classes.YearInvalid : null
    

    const verifyIfYearIsValid = (yearInput) => {
        let itsValid = true
        if(yearInput*1 > 2100) {
            itsValid = false
            setInputValue(2100)
        }
        if(yearInput*1 < 2000) {
            itsValid = false
    
            setInputValue(2000)
        }

        yearsArray.forEach(element => {
            if(element.payload*1 === yearInput*1) {
                itsValid = false
            }
        });

        return itsValid
    }
    const submitButtonPressed = () => {
        let verified = verifyIfYearIsValid(inputValue);

        if(verified) {
            dispatch(homePageStateSliceActions.addYear(inputValue));
            toggleModal();
            props.valid();
        } else {
            props.invalid();
        }
    }

    return (
        <div className={classes.AddNewYearModal}>
            {isModalOpen && <div onClick={toggleModal} className={classes.Backdrop} /> }

            <div className={classes.Modal}>
                <input className={classes.Year + ' ' + invalidBorder}  type='number' max='2100' min='2000' placeholder='Enter Year' value={inputValue} onChange={changeInputValue}/>
                <button onClick={submitButtonPressed}  className={classes.Submit} >Add Yearly Budget</button>
            </div>
        </div>
    )
}

export default AddNewYearModal;