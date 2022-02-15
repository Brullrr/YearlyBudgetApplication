import { useSelector, useDispatch } from "react-redux";
import { monthlySliceActions } from "../../store/monthlySlice";
import FirstTimeMonthModal from "../Modals/FirstTimeMonthModal/FirstTimeMonthModal";
import classes from './MonthlyPage.module.css';



const MonthlyPage = (props) => {


    const dispatch = useDispatch();
    
    let monthsStateArray = useSelector(state => state.monthlySlice)
    let isItTheFirstTime = true;
    let income = 0;
    let expectedExpenses = '';
    monthsStateArray.forEach(e => {
            if(e.year === props.year && e.month === props.month) {
                isItTheFirstTime = false;
                console.log(e)
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
    console.log(maxDate)


    

    return (

        isItTheFirstTime ? <FirstTimeMonthModal year={props.year} month={props.month}/> : 
        (
            <div className={classes.MonthlyPage}>
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
                            return <div key={e.expense} className={classes.Expense}>
                                <div>{e.expense}</div>
                                <div>{e.amount}</div>
                                <div>{2}</div>
                                <div>{e.amount - 2}</div>
                            </div>
                        })
                    }
                </div>
                <div className={classes.NewReceiptHolder}>
                    <div className={classes.NewReceipt}>
                        <div className={classes.NewReceiptTitle}><p>New Receipt</p></div>
                        <div className={classes.NewReceiptDate}><p>Date</p><input type='date' min={minDate} max={maxDate} /></div>
                        <div className={classes.NewReceiptAmount}><p>Amount</p><input type='number' /></div>
                        <div className={classes.NewReceiptCategory}>
                            <p>Category</p>
                            <select>
                                <option value="incomeTax">Income Tax</option>
                            </select>
                        </div>
                        <div className={classes.NewReceiptComments}><p>Comments</p><textarea type='text' /></div>
                        <div className={classes.NewReceiptSubmit}><button>ADD</button></div>
                    </div>
                    
                </div>
                <div className={classes.GraphHolder}>
                    <div className={classes.Graph}></div>
                </div>
                <div className={classes.IncomeSavings}>
                    <div className={classes.IncomeSavingsIncome} ><p>Income: </p> <p>&#165;330,000</p></div>
                    <div className={classes.IncomeSavingsSavings}><p>Savings: </p> <p>&#165;30,000</p></div>
                </div>
                
                <div className={classes.OpenReceiptsButton}>
                    <button>Open Receipts</button>
                </div>
                <div className={classes.Navigation}></div>
            </div>
        )
    )
}


export default MonthlyPage;