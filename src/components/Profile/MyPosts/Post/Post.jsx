import React from "react";
import s from './Post.module.css';

function Post(props) {
    return(
      <div className={s.item}>
      <img src="https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg"/>
      { props.message }
      <div>
        <span>♡ like</span>
      </div>
      </div>
    )
}

export default Post;