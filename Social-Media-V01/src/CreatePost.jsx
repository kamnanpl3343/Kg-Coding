import React, { useContext, useRef } from "react";
import PostList from "./PostList";
import { PostListData } from "./store/storeList";

const CreatePost = ({ setSelectedTab }) => {
  const { addList } = useContext(PostListData);
  const userIdRef = useRef();
  const postTitleRef = useRef();
  const postBodyRef = useRef();
  const postReactionRef = useRef();
  const postTagRef = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const userId = userIdRef.current.value;
    const postTitle = postTitleRef.current.value;
    const postBody = postBodyRef.current.value;
    const postReaction = postReactionRef.current.value;
    const postTag = postTagRef.current.value.split(" ");
    const id = Date.now();

    addList(id, userId, postTitle, postBody, postReaction, postTag);
    userIdRef.current.value = "";
    postTitleRef.current.value = "";
    postBodyRef.current.value = "";
    postReactionRef.current.value = "";
    postTagRef.current.value = "";

    setSelectedTab("Home");
  };

  return (
    <>
      <form onSubmit={(event) => handleAddButton(event)}>
        <div className="mb-3 formHeading">
          <label htmlFor="UserId" className="form-label">
            UserId
          </label>
          <input
            type="text"
            className="form-control"
            id="UserId"
            ref={userIdRef}
            placeholder="Enter ur UserId..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titleName" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            ref={postTitleRef}
            id="titleName"
            placeholder="What's New Today??"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titleBody" className="form-label">
            Post Body
          </label>
          <textarea
            type="text"
            className="form-control"
            ref={postBodyRef}
            id="titleBody"
            placeholder="Tell me more about it??"
            rows={4}
            cols={8}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titleReaction" className="form-label">
            Post Reaction
          </label>
          <input
            type="number"
            className="form-control"
            id="titleReaction"
            ref={postReactionRef}
            placeholder="How many reaction did u got today??"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="titleTags" className="form-label">
            Post Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="titleTags"
            ref={postTagRef}
            placeholder="Enter Your hashtags.."
          />
        </div>
        <div className="submit">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
