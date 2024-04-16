import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListData } from "./store/storeList";
import Message from "./Message";
import Loading from "./Loading";

const PostList = () => {
  const { currList, isLoading } = useContext(PostListData);
  console.log(`current item is bla bla vla ${currList}`);
  const handleOnFetchData = () => {};

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && currList.length === 0 && (
        <Message OnFetchData={handleOnFetchData} />
      )}
      {!isLoading && currList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
