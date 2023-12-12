import React,{useState} from 'react'
const TernaryCondition=()=>{
    const[isLoggedin,setIsLoggedIn]=useState(false)
    const handleClick=()=>{
        setIsLoggedIn(!isLoggedin);
    }
    return(
        <div>
            {isLoggedin?
            <p>Homepage</p>:
            <p>loginpage</p>

            }
            <button onClick={handleClick}>change state</button>
        </div>
    )
}
export default TernaryCondition;
