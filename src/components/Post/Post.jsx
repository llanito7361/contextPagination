import React from "react";

const Post = ({ id, title, body }) => {
  return (
    <li key={id}>
      <h5>{title}</h5>
      <p>id: {id}</p>
      <p>{body}</p>
    </li>
  );
};

export default Post;
