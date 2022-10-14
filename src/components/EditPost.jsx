import React, { useContext, useState, useEffect } from "react";
import { postsContext } from "../postContext";
import { useParams, useNavigate } from "react-router-dom";
import "./EditPost.css";
import { RotatingLines } from "react-loader-spinner";

const EditPost = () => {
  const { getOnePost, onePost, editPost } = useContext(postsContext);
  const params = useParams();
  const navigate = useNavigate();

  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOnePost(params.id);
  }, []);

  useEffect(() => {
    if (onePost) {
      setBody(onePost.body);
      setAuthor(onePost.author);
      setImage(onePost.image);
    }
  }, [onePost]);

  function saveChanges() {
    let editedPost = {
      body,
      author,
      image,
    };

    editPost(params.id, editedPost);
    navigate("/");
  }

  return onePost ? (
    <form className="form-edit">
      <h2>Edit Post</h2>
      <input
        type="text"
        placeholder="Post text"
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
      <button className="btn-save" onClick={saveChanges}>
        Save changes
      </button>
    </form>
  ) : (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};

export default EditPost;
