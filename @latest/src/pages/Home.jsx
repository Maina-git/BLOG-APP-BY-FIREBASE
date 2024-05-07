import React from 'react'
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from '../Firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import { auth } from '../Firebase';
import { BsTrash3Fill } from "react-icons/bs";

function Home({isAuth}) {
const [postLists, setPostLists]=useState([]);
const postCollectionRef=collection(db, "posts");

useEffect(()=>{
  const getPosts=async ()=>{
    const data=await getDocs(postCollectionRef);
    setPostLists(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
  };
  getPosts();
})
const deletePost= async(id)=>{
  const postDoc=doc(db, "posts", id)
await deleteDoc(postDoc)
}


  return (
    <div className="homePage">
      {postLists.map((post)=>{
        return  <div className="post">
          <div className="postheader">
            <div className="title"><h1>{post.title}</h1></div>
            <div className="deletePost">
      { isAuth && post.author.id === auth.currentUser. uid && (<button onClick={()=>{deletePost(post.id)}}>
                <BsTrash3Fill/>
                </button>
      )}
            </div>
          </div>
          <div className="posttextcontainer">
     {post.postText}
          </div>
          <h3>@{post.author.name}</h3>
        </div>
      })}
    </div>
  )
}

export default Home;
