import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from './users/Signup';
import Home from "./core/Home";
import Menu from "./core/Menu";
import Alert from '../src/core/Alert'
import Signin from "./users/Signin";
import PrivateRoute from "./auth/PrivateRoute";
import DashBoard from "./users/UserDashBoard";
import AdminDashboard from './users/AdminDashboard'
import AdminPrivateRoute from "./auth/AdminPrivateRoute";
import AddCategory from "./admin/AddCategory";
const Routes = () => {
    return (
        <BrowserRouter>

            <Menu />
            <Alert />
            <Switch>
                <AdminPrivateRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminPrivateRoute path='/create/category' exact component={AddCategory} />
                <PrivateRoute path="/user/dashboard" exact component={DashBoard} />
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
