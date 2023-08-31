import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import LandingView from './pages/LandingView';
import FlightInfo from './pages/FlightInfo';




export default function AppRoutes(props){




    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element = {<LandingView/>} />
            <Route path='/view-flight-info' element = {<FlightInfo/>} />
        </Routes>
        </BrowserRouter>


    )
}