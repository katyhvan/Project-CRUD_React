import React, { useEffect, useContext } from "react";
import { postsContext } from "../postContext";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { RotatingLines } from "react-loader-spinner";

const PostDetails = () => {
  const { getOnePost, onePost, deletePost } = useContext(postsContext);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOnePost(params.id);
  });

  return onePost ? (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <p>Author: {onePost.author}</p>
          <Card.Img variant="top" src={onePost.image} />
          <Card.Text>{onePost.body}</Card.Text>
          <Button
            variant="success"
            className="m-1"
            onClick={() => navigate(`/edit/${onePost.id}`)}
          >
            Edit
          </Button>
          <Button
            variant="primary"
            className="m-1"
            onClick={() => navigate(`/details/${onePost.id}`)}
          >
            Details
          </Button>
          <Button
            variant="danger"
            className="m-1"
            onClick={() => deletePost(onePost.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  ) : (
    // <h2>Loading...</h2>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};

export default PostDetails;
