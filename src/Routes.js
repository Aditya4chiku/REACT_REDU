import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from './users/Signup';
import Home from "./core/Home";
import Menu from "./core/Menu";
import Alert from '../src/core/Alert'
const Routes = () => {
    return (
        <BrowserRouter>
            <Alert />
            <Menu />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
