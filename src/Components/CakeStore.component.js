import React from 'react'
import {buyCake} from '../Redux/CakeRedux/CakeActions'
import { connect } from 'react-redux'

function CakeStore(props) {
    return (
        <div>
            number of cakes - {props.numOfCakes}
            <button onClick={props.dispatch}> Buy cake </button>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        numOfCakes: state.cake.numOfCakes
    })
}

const mapDispatchtoState = (dispatch) => {
    return({
        dispatch : ()=>{
            dispatch(buyCake())
        }
    })
}

export default connect(mapStateToProps,mapDispatchtoState)(CakeStore)
