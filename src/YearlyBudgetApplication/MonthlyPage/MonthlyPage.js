import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { monthlySliceActions } from "../../store/monthlySlice";
import FirstTimeMonthModal from "../Modals/FirstTimeMonthModal/FirstTimeMonthModal";
import classes from './MonthlyPage.module.css';
import { receiptsSliceActions } from "../../store/receiptsSlice";
import ReceiptsModal from "../Modals/ReceiptsModal/ReceiptsModal";



const MonthlyPage = (props) => {
    const dispatch = useDispatch();

    //receipt calcualtions
    let receiptsArray = useSelector(state => state.receiptsSlice)
    


    let monthsStateArray = useSelector(state => state.monthlySlice)
    let isItTheFirstTime = true;
    let income = 0;
    let expectedExpenses = '';
    monthsStateArray.forEach(e => {
            if(e.year === props.year && e.month === props.month) {
                isItTheFirstTime = false;
                income = e.income;
                expectedExpenses = e.expectedExpenses;
            }        
    });

    let monthNumber = 12;
    switch (props.month) {
            case 'January':
                monthNumber = '01';
            break;
            case 'February':
                monthNumber = '02';
            
            break;
            case 'March':
                monthNumber = '03';
            
            break;
            case 'April':
                monthNumber = '04';
            
            break;
            case 'May':
                monthNumber = '05';
            
            break;
            case 'June':
                monthNumber = '06';
            
            break;
            case 'July':
                monthNumber = '07';
            
            break;
            case 'August':
                monthNumber = '08';
            
            break;
            case 'September':
                monthNumber = '09';
            
            break;
            case 'October':
                monthNumber = 10;
            
            break;
            case 'November':
                monthNumber = 11;
            
            break;

    
        default:
            break;
    }
    let dayNumber = monthNumber === '02' ? 28 : monthNumber === '04' ||  monthNumber === '06' ||  monthNumber === '09' ||  monthNumber === 11 ? 30 : 31 
    let leapYearCheck = (props.year % 4) === 0 ? true : false;
    if (leapYearCheck && monthNumber === '02'){ dayNumber = 29};
    let minDate = props.year + '-' + monthNumber + '-' + '01';
    let maxDate = props.year + '-' + monthNumber + '-' + dayNumber;


    //Creates this Months expenses
    let receiptsArrayThisMonth = [];
    receiptsArray.forEach(element => {
        if(element.date >= minDate && element.date <= maxDate ) {
            receiptsArrayThisMonth.push(element);
        }
    });
    //Calculates each total expense
    let totalIncomeTaxPaid = 0;
    let totalRentPaid = 0;
    let totalHealthInsurancePaid = 0;
    let totalPensionPaid = 0;
    let totalResidenceTaxPaid = 0;
    let totalCarInsurancePaid = 0;
    let totalCarFuelPaid = 0;
    let totalTrainPaid = 0;
    let totalBusPaid = 0;
    let totalGasPaid = 0;
    let totalElectricityPaid = 0;
    let totalWaterPaid = 0;
    let totalInternetPaid = 0;
    let totalPhonePaid = 0;
    let totalGroceriesPaid = 0;
    let totalSchoolLunchPaid = 0;
    let totalRestaurantsPaid = 0;
    let totalAlcoholPaid = 0;
    let totalGiftsPaid = 0;
    let totalGymPaid = 0;
    let totalMiscellaneousPaid = 0;


    receiptsArrayThisMonth.forEach(e => {
        switch(e.category) {
            case 'Income Tax' :
            totalIncomeTaxPaid = totalIncomeTaxPaid*1 + e.amount*1;
            break;
            case 'Rent' :
                totalRentPaid = totalRentPaid*1 + e.amount*1;
            break;
            case 'Health Insurance' :
                totalHealthInsurancePaid = totalHealthInsurancePaid*1 + e.amount*1;
            break;
            case 'Pension' :
                totalPensionPaid = totalPensionPaid*1 + e.amount*1;
            break;
            case 'Residence Tax' :
                totalResidenceTaxPaid = totalResidenceTaxPaid*1 + e.amount*1;
            break;
            case 'Car Insurance' :
                totalCarInsurancePaid = totalCarInsurancePaid*1 + e.amount*1;
            break;
            case 'Car Fuel' :
                totalCarFuelPaid = totalCarFuelPaid*1 + e.amount*1;
            break;
            case 'Train' :
                totalTrainPaid = totalTrainPaid*1 + e.amount*1;
            break;
            case 'Bus' :
                totalBusPaid = totalBusPaid*1 + e.amount*1;
            break;
            case 'Gas' :
                totalGasPaid = totalGasPaid*1 + e.amount*1;
            break;
            case 'Water' :
                totalWaterPaid = totalWaterPaid*1 + e.amount*1;
            break;
            case 'Electricity' :
                totalElectricityPaid = totalElectricityPaid*1 + e.amount*1;
            break;
            case 'Internet' :
                totalInternetPaid = totalInternetPaid*1 + e.amount*1;
            break;
            case 'Phone' :
                totalPhonePaid = totalPhonePaid*1 + e.amount*1;
            break;
            case 'Groceries' :
                totalGroceriesPaid = totalGroceriesPaid*1 + e.amount*1;
            break;
            case 'School Lunch' :
                totalSchoolLunchPaid = totalSchoolLunchPaid*1 + e.amount*1;
            break;
            case 'Restaurants' :
                totalRestaurantsPaid = totalRestaurantsPaid*1 + e.amount*1;
            break;
            case 'Alcohol' :
                totalAlcoholPaid = totalAlcoholPaid*1 + e.amount*1;
            break;
            case 'Gifts' :
                totalGiftsPaid = totalGiftsPaid*1 + e.amount*1;
            break;
            case 'Gym' :
                totalGymPaid = totalGymPaid*1 + e.amount*1;
            break;
            case 'Miscellaneous' :
                totalMiscellaneousPaid = totalMiscellaneousPaid*1 + e.amount*1;
            break;

        }
    });

    let totalsArray = [
        totalIncomeTaxPaid,
        totalRentPaid,
        totalHealthInsurancePaid,
        totalPensionPaid,
        totalResidenceTaxPaid,
        totalCarInsurancePaid,
        totalCarFuelPaid,
        totalTrainPaid,
        totalBusPaid,
        totalGasPaid,
        totalElectricityPaid,
        totalWaterPaid,
        totalInternetPaid,
        totalPhonePaid,
        totalGroceriesPaid,
        totalSchoolLunchPaid,
        totalRestaurantsPaid,
        totalAlcoholPaid,
        totalGiftsPaid,
        totalGymPaid,
        totalMiscellaneousPaid
    ];

    //New Receipt to state
    const [receiptDate, setReceiptDate] = useState('');
    const [receiptAmount, setReceiptAmount] = useState(0);
    const [receiptCategory, setReceiptCategory] = useState('');
    const [receiptComments, setReceiptComments] = useState('');

    const changeReceiptDate = (e) =>{
        setReceiptDate(e.target.value)
    }

    const changeReceiptAmount = (e) => {
        setReceiptAmount(e.target.value)
    }
    
    const changeReceiptCategory = (e) => {
        setReceiptCategory(e.target.value)
    }

    const changeReceiptComments = (e) => {
        setReceiptComments(e.target.value)
    }

    const addToReceiptsState = () => {

        let allowPassToState = true;

        if(receiptDate === '') {
            allowPassToState = false;
        }
        if(receiptAmount <= 0) {
            allowPassToState = false;
        }
        if(receiptCategory === '') {
            allowPassToState = false;
        }

        
        if(allowPassToState) {
            alert('Added Receipt')
            dispatch(receiptsSliceActions.addReceipt({
                date: receiptDate,
                amount: receiptAmount,
                category: receiptCategory,
                comments: receiptComments
            }))
        }
    }
    const [isReceiptsModalOpen, setIsReceiptsModalOpen] = useState(false);

    const toggleReceiptsModal = () => {
        setIsReceiptsModalOpen(!isReceiptsModalOpen)
    }

    let totalPaid = 0;
    totalsArray.forEach(e => {
        totalPaid = totalPaid + e;
    })

    let monthlySavings = income*1 - totalPaid*1;

    return (

        isItTheFirstTime ? <FirstTimeMonthModal year={props.year} month={props.month}/> : 
        (
            <div className={classes.MonthlyPage}>
                {isReceiptsModalOpen ? <ReceiptsModal minDate={minDate} maxDate={maxDate} toggleReceiptsModal={toggleReceiptsModal} year={props.year} month={monthNumber} /> : null}
                <div className={classes.MonthBanner}>{props.month}</div>
                <div className={classes.ExpensesCalculated}>
                            <div className={classes.Expense}>
                                <div>Expense</div>
                                <div>Budget</div>
                                <div>Actual</div>
                                <div>Remainder</div>
                            </div>
                    {
                        expectedExpenses.map(e => {
                            let paid = 0;
                            switch(e.expense) {
                                case 'Income Tax' :
                                    paid = totalIncomeTaxPaid
                                break;
                                case 'Rent' :
                                    paid = totalRentPaid
                                break;
                                case 'Health Insurance' :
                                    paid = totalHealthInsurancePaid
                                break;
                                case 'Pension' :
                                    paid = totalPensionPaid
                                break;
                                case 'Residence Tax' :
                                    paid = totalResidenceTaxPaid
                                break;
                                case 'Car Insurance' :
                                    paid = totalCarInsurancePaid
                                break;
                                case 'Car Fuel' :
                                    paid = totalCarFuelPaid
                                break;
                                case 'Train' :
                                    paid = totalTrainPaid
                                break;
                                case 'Bus' :
                                    paid = totalBusPaid
                                break;
                                case 'Gas' :
                                    paid = totalGasPaid
                                break;
                                case 'Water' :
                                    paid = totalWaterPaid
                                break;
                                case 'Electricity' :
                                    paid = totalElectricityPaid
                                break;
                                case 'Internet' :
                                    paid = totalInternetPaid
                                break;
                                case 'Phone' :
                                    paid = totalPhonePaid
                                break;
                                case 'Groceries' :
                                    paid = totalGroceriesPaid
                               break;
                                case 'School Lunch' :
                                    paid = totalSchoolLunchPaid
                                break;
                                case 'Restaurants' :
                                    paid = totalRestaurantsPaid
                                break;
                                case 'Alcohol' :
                                    paid = totalAlcoholPaid
                                break;
                                case 'Gifts' :
                                    paid = totalGiftsPaid
                                break;
                                case 'Gym' :
                                    paid = totalGymPaid
                                break;
                                case 'Miscellaneous' :
                                    paid = totalMiscellaneousPaid
                                break;
                    
                            }
                            
                            
                            let remainder = e.amount - paid;
                            return <div key={e.expense} className={classes.Expense}>
                                <div>{e.expense}</div>
                                <div>{e.amount}</div>
                                <div>{paid}</div>
                                <div>{remainder}</div>
                            </div>
                        })
                    }
                </div>
                <div className={classes.NewReceiptHolder}>
                    <div className={classes.NewReceipt}>
                        <div className={classes.NewReceiptTitle}><p>New Receipt</p></div>
                        <div className={classes.NewReceiptDate}><p>Date</p><input type='date' min={minDate} max={maxDate} value={receiptDate} onChange={changeReceiptDate} /></div>
                        <div className={classes.NewReceiptAmount}><p>Amount</p><input type='number' min='0' value={receiptAmount} onChange={changeReceiptAmount} /></div>
                        <div className={classes.NewReceiptCategory}>
                            <p>Category</p>
                            <select value={receiptCategory} onChange={changeReceiptCategory}>
                            <option value="">Category</option>
                            {expectedExpenses.map(e => {
                                return <option key={e.expense + 'option'} value={e.expense}>{e.expense}</option>
                            })}

                            </select>
                        </div>
                        <div className={classes.NewReceiptComments}><p>Comments</p><textarea type='text' value={receiptComments} onChange={changeReceiptComments} /></div>
                        <div className={classes.NewReceiptSubmit}><button onClick={addToReceiptsState}>ADD</button></div>
                    </div>
                    
                </div>
                <div className={classes.GraphHolder}>
                    <div className={classes.Graph}></div>
                </div>
                <div className={classes.IncomeSavings}>
                    <div className={classes.IncomeSavingsIncome} ><p>Income: </p> <p>&#165;{income}</p></div>
                    <div className={classes.IncomeSavingsSavings}><p>Savings: </p> <p>&#165;{monthlySavings}</p></div>
                </div>
                
                <div className={classes.OpenReceiptsButton}>
                    <button onClick={toggleReceiptsModal}>Open Receipts</button>
                </div>
                <div className={classes.Navigation}></div>
            </div>
        )
    )
}


export default MonthlyPage;