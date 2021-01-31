import React, { useState } from 'react'
import LI_Logo from '../assets/LI_Logo.png'
import google from '../assets/google.png'
import '../styles/signup.css'
import {auth} from '../firebase/firebase';


function SginUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = () => {
        auth.createUserWithEmailAndPassword(email,password)
        .then((response) => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="signup">
            <img src={LI_Logo} alt="logo" />
            <p>Make the most of your professional life</p>
            <div className="register-form">
                <div>
                    E-mail<br/>
                    <input type="text" value={email} className="email-input" onChange={e => setEmail(e.target.value)} name="email"/><br/>
                    Password (6 characters minimum)<br/>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} className="password-input" name="password"/>
                    <p className="terms-and-conditions">By clicking Accept and register, you agree to the <a href ="!#" className="conditions-styles">Terms of Use</a> , the <a href ="!#" className="conditions-styles">Privacy Policy</a> and <a href ="!#" className="conditions-styles">cookies Policy </a> LinkedIn.</p>
                    <button onClick={register} className="register-button">Accept and register</button>
                    <div className="pass-section">
                        
                        <hr/>
                        
                    </div>
                    <div className="google-singup">
                        <img className="icon" src={google}></img>
                        <button  className="signup-google-but">Sign up with google</button>
                    </div>
                    <p className="registred">Already registred ? <a href="/login">Login</a></p>
                </div>
            </div>
        </div>
    )
}

export default SginUp
