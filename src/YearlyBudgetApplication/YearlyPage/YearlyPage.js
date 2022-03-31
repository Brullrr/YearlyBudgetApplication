import classes from './YearlyPage.module.css';
import { Link } from 'react-router-dom';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';


const YearlyPage  = (props) => {
    const monthsArray = ['January','February','March','April','May','June','July','August','September','October','November','December']


    const monthSliceData = useSelector(state => state.monthlySlice)
    const monthlyIncomes = []; 
    monthSliceData.forEach(element => {
        if(element.year === props.year) {
            monthlyIncomes.push(element.income) 
        }
       
    });
    let yearlyIncome = 0;
    monthlyIncomes.forEach(e => yearlyIncome = yearlyIncome + e*1);

    const receiptsSliceData = useSelector(state => state.receiptsSlice);
    const expensesArray = [];
    receiptsSliceData.forEach(e=> {
        console.log(e)
        let substrYear = e.date.substr(0,4);
        console.log(props.year + ' and ' + substrYear)
        if(substrYear*1 === props.year*1) {
            expensesArray.push(e.amount);

        }
    })
    let yearlySpent = 0;
    expensesArray.forEach(e => yearlySpent = yearlySpent + e*1);
    let yearlySaved = yearlyIncome - yearlySpent;

    // add commas to number as string


    return (
    <div className={classes.YearlyPage}>
        
        <div className={classes.YearTitle}>{props.year}</div>
        <div className={classes.MonthsHolder}>
            <Link to={'/' + props.year*1 + monthsArray[0]}><button className={classes.Month}>January</button></Link>
            <Link to={'/' + props.year + 'February'}><button className={classes.Month}>February</button></Link>
            <Link to={'/' + props.year + 'March'}><button className={classes.Month}>March</button></Link>
            <Link to={'/' + props.year + 'April'}><button className={classes.Month}>April</button></Link>
            <Link to={'/' + props.year + 'May'}><button className={classes.Month}>May</button></Link>
            <Link to={'/' + props.year + 'June'}><button className={classes.Month}>June</button></Link>
            <Link to={'/' + props.year + 'July'}><button className={classes.Month}>July</button></Link>
            <Link to={'/' + props.year + 'August'}><button className={classes.Month}>August</button></Link>
            <Link to={'/' + props.year + 'September'}><button className={classes.Month}>September</button></Link>
            <Link to={'/' + props.year + 'October'}><button className={classes.Month}>October</button></Link>
            <Link to={'/' + props.year + 'November'}><button className={classes.Month}>November</button></Link>
            <Link to={'/' + props.year + 'December'}><button className={classes.Month}>December</button></Link>
        </div>
        <div className={classes.YearlyStats}>
            <div className={classes.DataHolder}>
                <div className={classes.StatsData}>Earnings: {yearlyIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </div>
                <div className={classes.StatsData}>Spent: {yearlySpent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                <div className={classes.StatsData}>Savings: {yearlySaved.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            </div>
            
                <div className={classes.Graph}>
                    <Chart type="pie" data = {{
                labels: ['Spent', 'Savings'],
                datasets: [
                    {
                        label: 'idk',
                        data: [
                            yearlySpent,
                            yearlySaved
                        ],
                        backgroundColor :[
                            'salmon',
                            'lightgreen',
                        ],
                        hoverOffset: 4
                    }
                ],
                    }} />

                    
                </div>
            
        </div>
        <div className={classes.HomeButtonHolder}>
            <Link to={'/'}><button className={classes.HomeButton} >Home</button></Link>
        </div>
    </div>)
}

export default YearlyPage;