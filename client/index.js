import 'babel-polyfill'
import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom'


import App from './App.js'

import configureStore from '../common/store/configureStore';

window.onload = function () {
    const store = configureStore();
    render(
        <Provider store={store}>
            <div>
                <App />
            </div>
        </Provider>,
        document.getElementById('root')
    )
};