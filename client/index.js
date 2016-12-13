import 'babel-polyfill'
import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import App from './App'
import Login from './components/Login'
import Signin from './components/Signin'

import configureStore from '../common/store/configureStore';

window.onload = function () {


    const store = configureStore();
    const history = syncHistoryWithStore(hashHistory, store)

    render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Signin}></Route>
                </Route>

            </Router>
        </Provider>,
        document.getElementById('root')
    )
};