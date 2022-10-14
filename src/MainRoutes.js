import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import EditPost from "./components/EditPost";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/" element={<PostList />} />
        <Route path="/details/:id" element={<PostDetails />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
