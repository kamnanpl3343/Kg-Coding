import React, { useContext } from "react";
import Post from "./Post";
import { PostListData } from "./store/storeList";

const PostList = () => {
  const { currList } = useContext(PostListData);
  return (
    <>
      {currList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
