import React from 'react';
import {Route, Switch} from 'react-router';
import FullProduct from "../components/fullProduct";
import ProductList from "../components/productList";


export const RoutingConfig = () => (
    <Switch>
        <Route path="/" exact component={ProductList}/>
        <Route path="/:id" exact component={FullProduct}/>

    </Switch>
);