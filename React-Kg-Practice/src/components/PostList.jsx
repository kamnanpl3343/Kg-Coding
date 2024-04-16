import React, { useContext, useEffect, useState } from "react";

import Post from "./Post";
import WelcomeMsg from "./WelcomeMsg";
import Loading from "./Loading";
import { PostListContext } from "../store/Store";

const PostList = () => {
  const { currItem, addApiList, isLoading } = useContext(PostListContext);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && currItem.length === 0 && <WelcomeMsg />}
      {!isLoading && currItem.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
