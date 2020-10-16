
import { INITIALIZE_FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './UserActions'
const initialState = {
    loading:true,
    data:[],
    error:''
}

export const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIALIZE_FETCH_USER : 
        return {
            ...state, loading : true
        }
        case FETCH_USER_SUCCESS : 
        return {   
            loading: false,
            data: action.payload,
            error: ''
        }
        case FETCH_USER_FAILURE : 
        return {
            loading: false,
            data: [],
            error: action.payload,
        }
        default: 
        return state

    }

}