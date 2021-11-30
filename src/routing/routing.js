import React from 'react';
import {Route, Switch} from 'react-router';
import FullProduct from "../components/fullProduct/fullProduct";
import Home from "../components/home/home";


export const RoutingConfig = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/:id" exact component={FullProduct}/>
    </Switch>
);