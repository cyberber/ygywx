import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Login from '../containers/login/login';
import defaultLayout from '../layout/default/default';
// import { Provider } from 'react-redux'

// import { createStore, applyMiddleware } from 'redux';
// import { counter } from '../redux/index.redux';
// import thunk from 'redux-thunk';
import '../redux/index'



// const store = createStore(counter, applyMiddleware(thunk));


export default class RouteMap extends Component {
    render () {
        return (
            // <Provider store={store}>
            //     <Router>
            //     <div style={{width: '100%', height: '100%' }}>
            //         <Route exact path='/' component={Login} />
            //         <Route path='/default' component={defaultLayout} />
            //     </div>
            //     </Router>
            // </Provider>
            <Router>
                <div style={{width: '100%', height: '100%' }}>
                    <Route exact path='/' component={Login} />
                    <Route path='/default' component={defaultLayout} />
                </div>
            </Router>
        )
    }
}
