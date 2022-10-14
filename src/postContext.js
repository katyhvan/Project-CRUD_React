import axios from "axios";
import React, { useReducer } from "react";

const INIT_STATE = {
  posts: [],
  onePost: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: action.payload };
    case "GET_ONE_POST":
      return { ...state, onePost: action.payload };
    default:
      return state;
  }
}

export const postsContext = React.createContext();

const PostsContextProvider = ({ children }) => {
  const API = "http://localhost:8000/posts";
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addPost(newPost) {
    await axios.post(API, newPost);
  }

  async function getPosts() {
    let res = await axios(API);
    dispatch({
      type: "GET_POSTS",
      payload: res.data,
    });
  }

  async function deletePost(id) {
    await axios.delete(`${API}/${id}`);
    getPosts();
  }

  async function getOnePost(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_POST",
      payload: res.data,
    });
  }

  function editPost(id, editedPost) {
    axios.patch(`${API}/${id}`, editedPost);
  }

  return (
    <>
      <postsContext.Provider
        value={{
          posts: state.posts,
          onePost: state.onePost,
          addPost,
          getPosts,
          deletePost,
          getOnePost,
          editPost,
        }}
      >
        {children}
      </postsContext.Provider>
    </>
  );
};

export default PostsContextProvider;
