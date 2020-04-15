import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from './users/Signup';
import Home from "./core/Home";
import Menu from "./core/Menu";
import Alert from '../src/core/Alert'
import Signin from "./users/Signin";
import PrivateRoute from "./auth/PrivateRoute";
import UserDashBoard from "./users/UserDashBoard";
const Routes = () => {
    return (
        <BrowserRouter>

            <Menu />
            <Alert />
            <Switch>
                <PrivateRoute path="/userdashboard" exact component={UserDashBoard} />
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
