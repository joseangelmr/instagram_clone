import { combineReducers } from 'redux'

var routerReducer = require('react-router-redux').routerReducer
var authReducer = require('./authReducer')

const rootReducer = combineReducers({
    routing: routerReducer,
    authReducer: authReducer
});

export default rootReducer;