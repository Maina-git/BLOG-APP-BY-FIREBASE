import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { signOut } from 'firebase/auth';
import "./App.css";
import { auth } from './Firebase';

function App() {

  const [isAuth, setIsAuth]=useState(localStorage.getItem("isAuth"));

    const signUserOut=()=>{
  signOut(auth).then(()=>{
    localStorage.clear();
    setIsAuth(false);
    window.location.pathname="/login";
  })
  }
return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        { !isAuth ?  (
        <Link to="/login">Login</Link>
      ) 
      : 
        (
          <>
        <Link to="/createpost">Create Post</Link>
        <button onClick={()=>signUserOut()}>Log Out</button>
        </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home  isAuth={isAuth}/>}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/Login"  element={<Login  setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  )
}

export default App;



























