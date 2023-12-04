import { useState } from "react";

const Post = ({ updateLikes, title, tree, imageURL, likes, timePosted, id, deleteButton }) => {
  const [postLikes, setPostLikes] = useState(likes);

  const handleLikeButton = () => {
    setPostLikes(postLikes + 1);
    console.log("HI");
    updateLikes(id, postLikes + 1);
  }

  return (
    <div className="post-container">
      <h2>{title}</h2>
      <p>{tree}</p>
      <img className="image-post-container" src={imageURL} alt="Post" />
      <p>Likes: {postLikes}</p>
      <p>Type of Tree: {tree}</p>
      <button onClick={handleLikeButton}>Like Button</button>
      <button onClick={() => deleteButton(id, imageURL)}>Delete Post</button>
    </div>
  );
};

export default Post;
