import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Login from '../containers/login/login';
import Recoder from '../containers/autoRecoder/autoRecoder';
import App from '../App';


export default class RouteMap extends Component {
    render () {
        return (
            <Router>
            <div>
                <Route exact path='/' component={Login} />
                <Route path='/Recoder' component={Recoder} />
                </div>
            </Router>
        )
    }
}
