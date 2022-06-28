import React from "react";
import { posts } from "../data";
import { useLocation } from "react-router-dom";

export const Post = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2]
  const post = posts.find(e=>e.id == postId)

  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postDescLong">{post.descLong}</p>
    </div>
  );
};
