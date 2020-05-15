import {GET_ERRORS, CLEAR_ERRORS} from './types'
//import { config } from 'react-transition-group'

//return err
export const returnErrors = (msg, status, id=null) => {
    return{
        type: GET_ERRORS, 
        payload: {
            msg,
            status,
            id
        }
    };
};

//clear errors
export const clearErrors = () => {
    return{
        type: CLEAR_ERRORS
    };
};