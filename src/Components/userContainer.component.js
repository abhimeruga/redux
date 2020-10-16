import React, {useEffect} from 'react'
import { userSuccess, userFailure } from "../Redux/FetchUser/UserActionCreator";
import { connect } from "react-redux";

function UserContainer(props) {

    useEffect( () => {
        fetch('https://jsonplaceholde.typicode.com/users')
        .then(res => res.json())
        .then(result =>{
            console.log(result)
            props.dispatch(userSuccess(result))
        })
        .catch( error => {
            props.dispatch(userFailure('error'))
            console.log(error)
        })
    },[]) 

    return (
        <div>
             {
                props.users.map(user=>{
                    return (<h3>{user.id}</h3>)
                })
            } 
            <h2>{props.error}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users : state.users.data,
        error : state.users.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (type) => {
            dispatch(type)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
