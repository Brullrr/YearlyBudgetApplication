
import { useDispatch } from 'react-redux';
import classes from './FirstTimeMonthModal.module.css';
import { monthlySliceActions } from '../../../store/monthlySlice';
import { useState } from 'react';

const FirstTimeMonthModal = (props) => {

    const [incomeTax, setIncomeTax] = useState(0);
    const [rent, setRent] = useState(0);
    const [healthInsurance, setHealthInsurance] = useState(0);
    const [pension, setPension] = useState(0);
    const [residenceTax, setResidenceTax] = useState(0);
    const [carInsurance, setCarInsurance] = useState(0);
    const [carFuel, setCarFuel] = useState(0);
    const [train, setTrain] = useState(0);
    const [bus, setBus] = useState(0);
    const [gas, setGas] = useState(0);
    const [electricity, setElectricity] = useState(0);
    const [water, setWater] = useState(0);
    const [internet, setInternet] = useState(0);
    const [phone, setPhone] = useState(0);
    const [groceries, setGroceries] = useState(0);
    const [schoolLunch, setSchoolLunch] = useState(0);
    const [restaurant, setRestaurant] = useState(0);
    const [alcohol, setAlcohol] = useState(0);
    const [gifts, setGifts] = useState(0);
    const [gym, setGym] = useState(0);
    const [miscellaneous, setMiscellaneous] = useState(0);


    const updateExpense = (e) => {
        switch (e.target.placeholder) {
                case 'Income Tax':
                    setIncomeTax(e.target.value)
                break;
                case 'Rent':
                    setRent(e.target.value)
                break;
                case 'Health Insurance':
                    setHealthInsurance(e.target.value)
                break;
                case 'Pension':
                    setPension(e.target.value)
                break;
                case 'Residence Tax':
                    setResidenceTax(e.target.value)
                break;
                case 'Car Insurance':
                    setCarInsurance(e.target.value)
                break;
                case 'Car Fuel':
                    setCarFuel(e.target.value)
                break;

                case 'Train':
                    setTrain(e.target.value)
                break;
                case 'Bus':
                    setBus(e.target.value)
                break;

                case 'Utility: Gas':
                    setGas(e.target.value)
                break;
                case 'Utility: Electricity':
                    setElectricity(e.target.value)
                break;
                case 'Utility: Water':
                    setWater(e.target.value)
                break;
                case 'Utility: Internet':
                    setInternet(e.target.value)
                break;
                case 'Utility: Phone':
                    setPhone(e.target.value)
                break;
                case 'Food: Groceries':
                    setGroceries(e.target.value)
                break;
                case 'Food: School Lunch':
                    setSchoolLunch(e.target.value)
                break;
                case 'Food: Restaurant':
                    setRestaurant(e.target.value)
                break;
                case 'Alcohol':
                    setAlcohol(e.target.value)
                break;
                case 'Gifts':
                    setGifts(e.target.value)
                break;
                case 'Gym':
                    setGym(e.target.value)
                break;
                case 'Miscellaneous':
                    setMiscellaneous(e.target.value)
                break;

        
            default:
                break;
        }
    }



    const [income, setIncome] = useState(0);
   
    const updateIncome = (e) => {
        setIncome(e.target.value)
    }

    let expectedExpenses = [];
    const dispatch = useDispatch();
   
    const disableFirstTime = () => dispatch(monthlySliceActions.addNewMonth({ month: props.month, year: props.year, monthlyIncome: income, expectedExpenses: expectedExpenses}))
   
    const submitPressed = () => {
        expectedExpenses = [
            {
                expense: 'Income Tax',
                amount: incomeTax
            },
            {
                expense: 'Rent',
                amount: rent
            },
            {
                expense: 'Health Insurance',
                amount: healthInsurance
            },
            {
                expense: 'Pension',
                amount: pension
            },
            {
                expense: 'Residence Tax',
                amount: residenceTax
            },
            {
                expense: 'Car Insurance',
                amount: carInsurance
            },
            {
                expense: 'Car Fuel',
                amount: carFuel
            },
            {
                expense: 'Train',
                amount: train
            },
            {
                expense: 'Bus',
                amount: bus
            },
            {
                expense: 'Gas',
                amount: gas
            },
            {
                expense: 'Electricity',
                amount: electricity
            },
            {
                expense: 'Water',
                amount: water
            },
            {
                expense: 'Internet',
                amount: internet
            },
            {
                expense: 'Phone',
                amount: phone
            },
            {
                expense: 'Groceries',
                amount: groceries
            },
            {
                expense: 'School Lunch',
                amount: schoolLunch
            },
            {
                expense: 'Restaurant',
                amount: restaurant
            },
            {
                expense: 'Alcohol',
                amount: alcohol
            },
            {
                expense: 'Gifts',
                amount: gifts
            },
            {
                expense: 'Gym',
                amount: gym
            },
            {
                
                expense: 'Miscellaneous',
                amount: miscellaneous
            },
        ]
        
        
        
        
        disableFirstTime();
    }
    return (
        <div className={classes.FirstTimeMonthModal}>
            <div  className={classes.Backdrop} /> 
            <div className={classes.Modal}>
                <div className={classes.InputsHolder}>
                    <p>Please enter your monthly income and what your budget is for each expense.</p>
                    <p>Income</p>
                    <p>Income Tax</p>
                    <input type='number' placeholder='Income' onChange={updateIncome} value={income} min={0}/>  
                    <input type='number' placeholder="Income Tax" onChange={updateExpense} value={incomeTax} min={0}/>  
                    <p>Rent</p>
                    <p>Health Insurance</p>     
                    <input type='number' placeholder="Rent" onChange={updateExpense} value={rent} min={0}/>       
                    <input type='number' placeholder="Health Insurance" onChange={updateExpense} value={healthInsurance} min={0}/>  
                    <p>Pension</p>
                    <p>Residence Tax</p>       
                    <input type='number' placeholder="Pension" onChange={updateExpense} value={pension} min={0}/>       
                    <input type='number' placeholder="Residence Tax" onChange={updateExpense} value={residenceTax} min={0}/> 
                    <p>Car Insurance</p>
                    <p>Car Fuel</p>        
                    <input type='number' placeholder="Car Insurance" onChange={updateExpense} value={carInsurance} min={0}/>       
                    <input type='number' placeholder="Car Fuel" onChange={updateExpense} value={carFuel} min={0}/>  
                    <p>Train</p>
                    <p>Bus</p>       
                    <input type='number' placeholder="Train" onChange={updateExpense} value={train} min={0}/>       
                    <input type='number' placeholder="Bus" onChange={updateExpense} value={bus} min={0}/>       
                    <p>Gas</p>
                    <p>Eletricity</p>  
                    <input type='number' placeholder="Utility: Gas" onChange={updateExpense} value={gas} min={0}/>       
                    <input type='number' placeholder="Utility: Electricity" onChange={updateExpense} value={electricity} min={0}/> 
                    <p>Water</p>
                    <p>Internet</p>        
                    <input type='number' placeholder="Utility: Water" onChange={updateExpense} value={water} min={0}/>       
                    <input type='number' placeholder="Utility: Internet" onChange={updateExpense} value={internet} min={0}/> 
                    <p>Phone</p>
                    <p>Groceries</p>        
                    <input type='number' placeholder="Utility: Phone" onChange={updateExpense} value={phone} min={0}/>       
                    <input type='number' placeholder="Food: Groceries" onChange={updateExpense} value={groceries} min={0}/>  
                    <p>School Lunch</p>
                    <p>Restaurant</p>       
                    <input type='number' placeholder="Food: School Lunch" onChange={updateExpense} value={schoolLunch} min={0}/>       
                    <input type='number' placeholder="Food: Restaurant" onChange={updateExpense} value={restaurant} min={0}/> 
                    <p>Alcohol</p>
                    <p>Gifts</p>        
                    <input type='number' placeholder="Alcohol" onChange={updateExpense} value={alcohol} min={0}/>       
                    <input type='number' placeholder="Gifts" onChange={updateExpense} value={gifts} min={0}/>    
                    <p>Gym</p>
                    <p>Miscellaneous</p>     
                    <input type='number' placeholder="Gym" onChange={updateExpense} value={gym} min={0}/>       
                    <input type='number' placeholder="Miscellaneous" onChange={updateExpense} value={miscellaneous} min={0}/>       
                    <button onClick={submitPressed} className={classes.Submit} >Add Month</button>
                </div>
            </div>
        </div>
    )
}

export default FirstTimeMonthModal;