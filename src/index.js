import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteMap from '../src/router/routerMap'
import registerServiceWorker from './registerServiceWorker';
import '../src/assets/style/reset.less'
import '../src/assets/style/index.less'
import './config'

ReactDOM.render(
    <RouteMap/>,
     document.getElementById('root')
    );
registerServiceWorker();
