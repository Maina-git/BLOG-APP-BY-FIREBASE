import React from 'react'
import { auth, provider } from '../Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

function Login({setIsAuth}){
    let navigate=useNavigate();
    const signInWithGoogle=()=>{
  signInWithPopup(auth, provider).then((result)=>{
    localStorage.setItem("isAuth", true);
    setIsAuth(true);
    navigate("/createpost");
  })
    }
  return (
    <div className="loginPage">
      <p>Sign in With Google to Continue</p>
      <button className="login-with-google-btn" 
      onClick={signInWithGoogle}>
        <FcGoogle/>
        Sign in with  Google
      </button>
    </div>
  )
}
export default Login;














