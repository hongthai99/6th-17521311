import { combineReducers } from 'redux';
import listReducer from './listReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    list: listReducer,
    error: errorReducer,
    auth: authReducer
});