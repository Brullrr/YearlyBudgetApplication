import classes from './HomePage.module.css';
import AddNewYearModal from '../Modals/AddNewYearModal/AddNewYearModal';
import { useSelector, useDispatch } from "react-redux";
import { homePageStateSliceActions } from '../../store/homePageSlice';
import { Link} from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {

    const dispatch = useDispatch();

    const isModalOpen = useSelector(state => state.homePageStateSlice.isModalOpen);
    const yearsArray = useSelector(state => state.homePageStateSlice.years);
    const [isValid, setIsValid] = useState(true);
    const invalidHandler = () => {
      setIsValid(false)
    }
    const validHandler = () => {
      setIsValid(true)
    }
    let yearsArrayCopy = [...yearsArray]
    const compare = ( a, b ) => {
        
        if ( a.payload < b.payload ){
          return -1;
        }
        if ( a.payload > b.payload ){
          return 1;
        }
        return 0;
      }
      
    yearsArrayCopy.sort( compare );

    const toggleModal = () => {
        dispatch(homePageStateSliceActions.toggleModalOpen())
    }


    return (
        <div className={classes.HomePage}>
            
            <div className={classes.YearsHolder}>
            
            {yearsArrayCopy.map((e)=>{
                 return (<Link className={classes.Link} key={e.payload} to={'/' + e.payload}><button key={e.payload} className={classes.YearButton}><p>{e.payload}</p></button></Link>)
            })}
                <button onClick={toggleModal} className={classes.AddNewYearButton}><p>Add New Year</p></button>
            </div>
            
            {isModalOpen && <AddNewYearModal isValid={isValid} invalid={invalidHandler} valid={validHandler} />}
        </div>
    )
}

export default HomePage;