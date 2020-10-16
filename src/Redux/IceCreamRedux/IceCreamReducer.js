import { BUY_ICECREAM } from "./IceCreamActionTypes";
const initialIceCreamState = {
    numOfIceCreams : 20
}

export const IceCreamReducer = (state = initialIceCreamState, action) =>{
    switch(action.type) {
        case BUY_ICECREAM : 
            return {
                ...state, numOfIceCreams : state.numOfIceCreams - 1
            }
        default : return state
    }
}