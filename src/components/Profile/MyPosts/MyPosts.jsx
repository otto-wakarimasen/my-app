import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return(
      <div className={s.content}>
        <div className={s.item}><h1>My Posts</h1>
        <textarea></textarea>
        <button>Add post</button></div>
        <Post message="Hello! How are you?"/>
        <Post message="It's my first post"/>
      </div>
    )
}

export default MyPosts;