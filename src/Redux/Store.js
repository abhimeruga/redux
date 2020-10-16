import { createStore } from 'redux'
import { cakeReducer } from './CakeRedux/CakeReducer'
import { combineReducers } from 'redux'
import { IceCreamReducer } from "./IceCreamRedux/IceCreamReducer";
import { UserReducer } from "./FetchUser/UserReducer";

const rootReducer = combineReducers ({
    cake: cakeReducer,
    iceCream : IceCreamReducer,
    users : UserReducer
})
export const store = createStore(rootReducer)