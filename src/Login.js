import React from 'react'
import "./Login.css"
import logo from "./images/wolf.png"
import { Button } from '@mui/material';
import {auth,provider} from "./firebase"
function Login() {
    const signIn=() =>{
        auth
        .signInWithPopup(provider)
        .then((result) =>{
            console.log(result);

        })
        .catch((error) =>alert(error.message));

    };
  return (
    <div className='login'>
        <div className="login_logo">
        <img src={logo} alt="" />
        <h3>Foxbook</h3>
    </div>
    <Button type='submit' onClick={signIn}>
        Sign in
    </Button>
    </div>
  )
}

export default Login;