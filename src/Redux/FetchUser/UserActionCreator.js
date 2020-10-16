import { INITIALIZE_FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './UserActions'

export const userInitialState = () => {
    return {
        type: INITIALIZE_FETCH_USER,
    }
}

export const userSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const userFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}