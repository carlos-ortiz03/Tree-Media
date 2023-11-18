const Post = ({ title, tree, imageURL, likes, timePosted, id, deleteButton }) => {
  console.log(imageURL)
  return (
    <div className="post-container">
      <h2>{title}</h2>
      <p>{tree}</p>
      <img className="image-post-container" src={imageURL} alt="Post" />
      <p>Likes: {likes}</p>
      <button onClick={() => deleteButton(id, imageURL)}>Delete Post</button>
    </div>
  );
};

export default Post;
