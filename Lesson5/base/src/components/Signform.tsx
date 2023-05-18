import React, { useState } from "react";
import './style/style.css'
import { SignInputs } from "./SignInputs";
import { LoginInputs } from "./LoginInputs";

export const SignForm = () => {
    const [signState, signToLogin] = useState('sign in');
    const [signStateButton, signToLoginButton] = useState('Already have an account? Login!');
    return(
        <form className="signForm" >
            <div>{signState === 'sign in' ? <SignInputs/> : <LoginInputs/>}</div>
            <button className="signButton" type="button">{signState}</button>
            <button type="button" onClick = {() => {
            if(signState === 'sign in'){
                signToLogin('login');
                signToLoginButton("Don't have an account? Sign in!");
            }
            else{signToLogin('sign in')
            signToLoginButton('Already have an account? Login!')
            }
            return(false)
        }}>{signStateButton}</button>
        </form>
    )
}
export default SignForm;