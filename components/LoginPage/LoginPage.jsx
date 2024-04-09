import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { assets } from '../../assets/assets';
import { auth } from '../../firebase/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = ({setShowLogin}) => {

    const navigate = useNavigate();
    const [currState, setCurrState] = useState("Login");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const auth = getAuth();

    const signIn =(e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            if(userCredential) {
                navigate('/')
            }
        }).catch((error) => {
            alert("Invalid Email or Password");
            console.log(error);
        });
    };

    const create = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential);
            if(userCredential) {
                navigate('/')
            }
        }).catch((error) => {
            alert("Invalid");
            console.log(error);
        });
    };

  return (
    <div className='login-page'>
        <form className='login-page-container'>
            <div className='login-page-title'>
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-page-inputs'>
                {currState==="Login"?<></>:<input type='text' placeholder='Your Name' required />}
                <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} required />
                <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} required />
            </div>
            <button onClick={currState==="Sign Up"?create:signIn}>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className='login-page-condition'>
                <input type="checkbox" required />
                <p>By Continuing, I Agree to the Terms Of Use and Privacy Policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a New Account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
            :<p>Already have an Account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
            }
        </form> 
    </div>
  )
}

export default LoginPage