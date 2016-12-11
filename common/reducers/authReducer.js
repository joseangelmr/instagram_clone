var authActions = require('./../actions/authActions')

const defaultState = {
    authenticated: false,
    token: null
}

module.exports = function AuthReducer(state, action) {
    if (!state) {
        state = defaultState
    }
    switch (action.type) {

        case authActions.AUTHENTICATED:
            return Object.assign({}, state, {
                authenticated: true,
                token: action.token,
            })
        case authActions.AUTHENTICATION_FAILED:
            return Object.assign({}, state, {
                authenticated: false,
            })
        default:
            return state
    }
}




