import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListData } from "./store/storeList";
import Message from "./Message";
import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const currList = useLoaderData();

  return (
    <>
      {currList.length === 0 && <Message />}
      {currList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
