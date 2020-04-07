import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import RouteMap from '../src/router/routerMap'
import registerServiceWorker from './registerServiceWorker';
import '../src/assets/style/reset.less'
import '../src/assets/style/index.less'
import './config'
import { createStore, applyMiddleware, compose } from 'redux';
import { counter } from './redux/index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Auth from './Auth';
import Dashboard from './dashboard';
import reducer from './redux/reducers'
import Login from './containers/login/login';
import defaultLayout from './layout/default/default';




const store = createStore(reducer,  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f => f
))
console.log(store.getState())

    ReactDOM.render(
        (<Provider store= {store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' exact component= {Login}></Route>
                    <Route path='/dashboard' component= {Dashboard}></Route>
                    <Route path='/defaultLayout' component= {defaultLayout}></Route>
                    <Redirect to='dashboard'></Redirect>
                </Switch>
            </BrowserRouter>
         </Provider>),
         document.getElementById('root')
    );

registerServiceWorker();
