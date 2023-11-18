import { useState, useEffect } from "react";
import Post from "./post";

const Posts = ({postsList, deleteButton}) => {

    console.log(postsList)

    return (
      <div className="posts-container">
        {
          postsList.length === 0 ? (
            <p>No New Posts</p>
          ) : (
            postsList.map((post) => (
              <Post deleteButton={deleteButton} key={post.id} id={post.id} {...post} />
            ))
          )
        }
      </div>
    )
}
  

  export default Posts;