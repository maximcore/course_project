import React, { Component } from "react";

import { postsList } from "./Data";

const Posts = () => {
  return (
    <div className="posts-container">
      {postsList.map((value, key) => (
        <div className="post">
          <img src={value.imageUrl} alt={value.imageAlt} />
          <div className="post-description">{value.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
