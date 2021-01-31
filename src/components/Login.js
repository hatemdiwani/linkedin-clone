import React, { useState } from 'react'
import '../styles/login.css'
import LI_Logo from '../assets/LI_Logo.png'
import {auth} from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import {login}  from '../features/userSlice';
import { useHistory } from 'react-router-dom';

function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const dispatch = useDispatch();
const history = useHistory();

    function signIn (){
        
        auth.signInWithEmailAndPassword(email,password)
        .then((usercre) => {
            dispatch(login({
                uid:usercre.user.uid,
                avatarurl:usercre.user.photoURL}))
                history.push('/feed')
        })
        .catch(error => {
            console.log('error loging in',error)
        })
    }

    const handlejoinClicked = () => {
        history.push('/signup')
    }


    return (
        <div className="login">
            <div className="login-header">
                <img src={LI_Logo} alt="logo" />
                <div className="header-buttons">
                    <button id="join-button" onClick={handlejoinClicked}>join now</button>
                    <button id="signin-button">Sign in</button>
                </div>
            </div>

            <div className="login-content">
                
                <div className="form-content">
                    <div className="form">
                        <p>
                            Welcome to your<br></br> professional community
                        </p>
                        <div >
                            <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} id="email-input" placeholder="Email or phone number"/>
                            <div className="password-div">
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" id="password-input" placeholder="Password"/>
                            <button className="show">show</button>
                            </div>
                            <a href="!#" className="forget-password">Forgot password?</a>
                            <button  className="submit-button" onClick={signIn}>Sign in</button>
                        </div>
                    </div>
                </div>

                <div className="image">
                    <img className="background-image" src='https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn' alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Login
