import React,{useState} from 'react'
const ConditionalRendering=()=>{
    const[value,setValue]=useState(true)
    if(value)
    {
        return(
            <div>
                <p>true block</p>
            </div>
        )
    }
    else{
        return(
            <div>
                <p>false block</p>
            </div>
        )
    }
}
export default ConditionalRendering;