import React,{useRef} from 'react';
const LoginForm=()=>{
    //initialize the ref
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
       //accessing the data
        const email=emailInputRef.current.value;
        const password=passwordInputRef.current.value;
        //tranforming data
        const formData={
            email,
            password,
        };
        //console log
        console.log(formData);
        //clearing the value
        emailInputRef.current.value="";
        passwordInputRef.current.value="";
        //focusing the email input box
        emailInputRef.current.focus();
        // passwordref.current.focus();
    };
return(
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="email" placeholder="email" ref={emailInputRef}/>
            </div>
            <div>
                <input type="password" placeholder="password" ref={passwordInputRef}/>
            </div>
            <button>LOGIN</button>
        </form>
    </div>
)
};
export default LoginForm;

