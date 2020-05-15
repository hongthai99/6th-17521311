//import axios
import axios from 'axios';
import {GET_LISTS, ADD_LIST, DELETE_LIST, LOADING_LIST } from './types';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

export const getLists = () => dispatch => {
    dispatch(setLoadingList());
    axios
        .get('https://api-6th-17521311.herokuapp.com/api/list')
        .then( res => 
            dispatch({
                type: GET_LISTS,
                payload: res.data
            }))
         .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addList = (list) => (dispatch, getState) => {
    axios
        .post('https://api-6th-17521311.herokuapp.com/api/list', list, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_LIST,
            payload:res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

};

export const deleteList = (id)=> (dispatch, getState) => {
   axios
        .delete(`https://api-6th-17521311.herokuapp.com/api/list/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_LIST,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setLoadingList = () => {
    return {
        type: LOADING_LIST
    };
};