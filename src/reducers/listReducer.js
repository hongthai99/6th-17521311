//import cai uuid nay de generate cai IDs cho cai Doing List. 
//import { v4 as uuidv4 } from 'uuid';

//
import {GET_LISTS, ADD_LIST, DELETE_LIST, LOADING_LIST } from '../actions/types';

const initialState = {
    lists: [
        //{ 
        //    id: uuidv4(), 
        //    name: 'Homework 6'
        //},
        //{ 
        //    id: uuidv4(), 
        //    name: 'Homework 5'
        //},
        //{ 
        //    id: uuidv4(), 
        //    name: 'Deadline'
        //}
    ],
    loading: false
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_LISTS: 
            return{
                ...state,
                lists: action.payload,
                loading: false
            };
        case ADD_LIST:
            return{
                ...state,
                lists: [action.payload, ...state.lists]
            };
        case DELETE_LIST:
            return{
                ...state,
                lists: state.lists.filter(list => list._id !== action.payload)
            };

        case LOADING_LIST:
            return{
                ...state,
                loading: true,

            }
        default:
            return state;
    }
}

//08/05/20 sometime i dont know why, moi nguoi moi tinh cach, mot suy nhung tai sao
//dang so nhat khong pahi la tu ki code, mo nhac chillis nghe lai vua chia tay nguoi iu 
//haizz 1h sang rui khong biet ban y ngu chua
// ma dang so nhat khong phai la khong biet lam ma la khong biet lam cai gi, hoc thi ngu :(( design thi xau :'(
// 
// tu ki voi ban than chut roi mai xoa
// refresh lai ban than 
// make a list need to do cho ngay mai
// 
// mai khoong hoc onl nen sang mai ranh qua choi voi chaus
// trua nau com
// ngu
// 1h vo lam assignment
// 3h hoc chut ukulele
// 5h choi chut tabletennis
// 6h30  dinner
// 7h hangout with friend
// 9h lam assignment 
// 11h di ngu ma ngay nao cung 1 or 2 gio sang moi ngu s...