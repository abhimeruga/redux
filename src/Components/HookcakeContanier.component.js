import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from "../Redux/CakeRedux/CakeActions";

function HookcakeContanier() {
    const numOfCakes = useSelector((state)=>state.cake.numOfCakes)
    const disPatch = useDispatch()
    return (
        <div>
            number of cakes : {numOfCakes}
            <button onClick={()=>{
                disPatch(buyCake())
            }}> buy cake</button>
        </div>
    )
}

export default HookcakeContanier
