import React, { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(false);
  return (
    <>
      <p onClick={() => setLike(!like)}>{like ? "❤️" : "🤍"}</p>
    </>
  );
};

export default Like;
