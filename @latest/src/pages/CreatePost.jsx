import React from 'react'
import { useState, useEffect } from 'react';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db, auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';


function CreatePost({isAuth}) {
const [title, setTitle]=useState("");
const[postText, setPostText]=useState("");


const postCollectionRef=collection(db, "posts");
const navigate=useNavigate();

const createPost= async ()=>{
await addDoc(postCollectionRef, {
   title,
   postText,
  author:{name: auth.currentUser.displayName, id: auth.currentUser.uid}
});
navigate("/");
}

useEffect(()=>{
  if(!isAuth){
navigate("/Login");
  }
},[])
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
<label htmlFor="">Title:</label>
<input type="text" placeholder='Title...' onChange={(event)=>{setTitle(event.target.value)}}/>
</div>
        <div className="inputGp">
          <label htmlFor="Post">Post</label>
          <textarea placeholder="Post..." onChange={(event)=>{setPostText(event.target.value)}}/>
        </div>

        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost;
