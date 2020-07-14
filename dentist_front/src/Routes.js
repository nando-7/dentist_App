import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Booking from './appointment/Booking'
import Home from './core/Home';


const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/booking" exact component={Booking}/>
        </Switch>
        </BrowserRouter>
    )
};

export default Routes