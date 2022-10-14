import React, { useContext, useEffect } from "react";
import { postsContext } from "../postContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Like from "./Like";
import "./PostList.css";

const PostList = () => {
  const { getPosts, posts, deletePost } = useContext(postsContext);

  useEffect(() => {
    getPosts();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="post-list">
      {posts.map((item) => (
        <Card style={{ width: "18rem" }} key={item.id}>
          <Card.Body>
            <p>Author: {item.author}</p>
            <Card.Img variant="top" src={item.image} className="post-img" />
            <Card.Text>{item.body}</Card.Text>
            <Like />
            <Button
              variant="success"
              className="m-1"
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </Button>
            <Button
              variant="primary"
              className="m-1"
              onClick={() => navigate(`/details/${item.id}`)}
            >
              Details
            </Button>
            <Button
              variant="danger"
              className="m-1"
              onClick={() => deletePost(item.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
