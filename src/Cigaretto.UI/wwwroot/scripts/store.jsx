import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router';
import rootReducer from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const _createStore = (history) => createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
        applyMiddleware(
            thunkMiddleware,
            routerMiddleware(history)
        )
    )
);

export default _createStore;
