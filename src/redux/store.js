//redux.js.org/api/store
//github.com/zalmoxisus/redux-devtools-extension
import {createStore, applyMiddleware, compose} from 'redux';

//library cho middleware
import thunk from 'redux-thunk';
import rootReducer from '../reducers/re-index';

//a variable representing initial state
const initialState = {};

// create variable for middleWare
const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;