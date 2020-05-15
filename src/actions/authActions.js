import axios from 'axios';
import{
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL} from './types';

//import module erroracttion
import {returnErrors} from './errorActions';



//Check token and load user
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({type: USER_LOADING});


    //axios 
    axios.get('https://api-6th-17521311.herokuapp.com/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}

//register user
export const register = ({name, email, password}) => dispatch => {
    //header
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    //req body
    const body = JSON.stringify({name, email, password});

    axios.post('https://api-6th-17521311.herokuapp.com/api/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL,
            });
        });
}

//login user

export const login = ({email, password}) => dispatch => {
    //header
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    //req body
    const body = JSON.stringify({email, password});

    axios.post('https://api-6th-17521311.herokuapp.com/api/auth', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL,
            });
        });
}


//logout user
export const logout = () => {
    return{
        type: LOGOUT_SUCCESS
    };
};
//setup config/header and token
export const tokenConfig = getState => {
    //get token
    const token = getState().auth.token;

    //Header
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    //If token add to header
    if(token){
        config.headers['x_auth_token'] = token;
    }
    return config;   
}