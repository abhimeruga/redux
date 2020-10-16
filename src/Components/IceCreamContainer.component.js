import React from 'react'
import { buyCake } from "../Redux/IceCreamRedux/IceCreamActionGenerator";
import { connect } from 'react-redux'
function IceCreamContainer(props) {
    return (
        <div>
            number of icecreams - {props.numOfIceCreams}
            <button onClick={props.dispatch}> buy ice cream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams : state.iceCream.numOfIceCreams
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: ()=>{
            dispatch(buyCake())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
