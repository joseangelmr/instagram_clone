/**
 * Created by joseangelmr on 29/11/16.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import DevTools from '../../client/DevTools';
const logger = createLogger();

const finalCreateStore = compose(
    // Middleware you want to use in development:
    applyMiddleware(logger, thunk),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers'))
        );
    }

    return store;
};