import React, {useState, useEffect} from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import {useNavigate} from "react-router-dom";

function CreatPost({ isAuth}) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {title, postText, author: {name: auth.currentUser.displayName,  id: auth.currentUser.uid }, 
    });
    navigate("/");
  };
useEffect(() => {
  if (!isAuth) {
    navigate("/login");
  }
}, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>New Post</h1>
        <div className="inputGp">
          <label>Title</label>
          <input placeholder="title..." onChange={(event) => {setTitle(event.target.value);}} />
        </div>
        <div className="inputGp">
          <label>Post</label>
          <textarea placeholder="post..." onChange={(event) => {setPostText(event.target.value);}}/>
        </div>
      </div>
      <div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatPost;