import { HashRouter, Route, Routes } from 'react-router-dom';
import TestComp from '../TestComp';
import HomePage from './HomePage/HomePage';
import YearlyPage from './YearlyPage/YearlyPage';
import { useSelector } from 'react-redux';
import MonthlyPage from './MonthlyPage/MonthlyPage';

const YearlyBudgetApplication = () => {

    const yearsArray = useSelector(state => state.homePageStateSlice.years)
    
    const monthsArray = ['January','February','March','April','May','June','July','August','September','October','November','December']
  
    const monthsRoutes = [];

    monthsArray.forEach((ele) => {
        yearsArray.forEach(e => {
                        monthsRoutes.push(
                            <Route key={e.payload + 'Route' + ele} path={'/' + e.payload + ele } element={ <MonthlyPage year={e.payload} month={ele} /> }></Route>
                        )
        })  
    })
  
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path='/' element={ <HomePage /> } />
                    <Route path="/testComp"  element={ <TestComp />} />
                    {yearsArray.map((e) => {
                        return (
                            <Route key={e.payload + 'Route'} path={'/' + e.payload} element={ <YearlyPage year={e.payload} /> }></Route>
                        
                            )
                    })}

                {
                    monthsRoutes.map(e => e)
                }  

                </Routes>
            </HashRouter>
        </div>
   )
}

export default YearlyBudgetApplication;