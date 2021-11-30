import { TYPES } from '../types/types';



export const authReducer = (state = {}, action) => {
    switch(action.type){
        case TYPES.login:
            return {
                ...action.payload,
                logged: true
            };
        case TYPES.logout:
            return {
                ...action.payload,
                logged: false
            }
        default:
            return state;
    }
}



