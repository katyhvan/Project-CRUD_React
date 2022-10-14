import React, { useState, useContext } from "react";
import { postsContext } from "../postContext";
import { useNavigate } from "react-router-dom";
import "./AddPost.css";

const AddPost = () => {
  const { addPost } = useContext(postsContext);
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function createPost() {
    if (!body || !author || !image) {
      alert("Some inputs are empty!");
    }

    let newPost = {
      body,
      author,
      image,
    };

    addPost(newPost);
    navigate("/");
  }

  return (
    <>
      <form className="post-form">
        <h2>New Post</h2>
        <input
          type="text"
          placeholder="Post Text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="btn-add" onClick={createPost}>
          Add Post
        </button>
      </form>
    </>
  );
};

export default AddPost;
