import React from "react";
import MainRoutes from "./MainRoutes";
import PostsContextProvider from "./postContext";

function App() {
  return (
    <>
      <PostsContextProvider>
        <MainRoutes />
      </PostsContextProvider>
    </>
  );
}

export default App;
