import classes from './YearlyPage.module.css';
import { Link } from 'react-router-dom';

const YearlyPage  = (props) => {
    const monthsArray = ['January','February','March','April','May','June','July','August','September','October','November','December']

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
                <div className={classes.StatsData}>Earnings: 4,000,000 </div>
                <div className={classes.StatsData}>Spent: 3,000,000</div>
                <div className={classes.StatsData}>Savings: 1,000,000</div>
            </div>
            
                <div className={classes.Graph}></div>
            
        </div>
    </div>)
}

export default YearlyPage;