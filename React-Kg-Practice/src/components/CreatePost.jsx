import React, { useContext } from "react";
import { useRef } from "react";
import { PostListContext } from "../store/Store";
import { Form } from "react-router-dom";

const CreatePost = ({ setSelectedItem }) => {
  const { addList } = useContext(PostListContext);
  const userIdRef = useRef();
  const postTitleRef = useRef();
  const postBodyRef = useRef();
  const postReactionRef = useRef();
  const postTagRef = useRef();

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const userId = userIdRef.current.value;
  //   const title = postTitleRef.current.value;
  //   const body = postBodyRef.current.value;
  //   const reactions = postReactionRef.current.value;
  //   const tags = postTagRef.current.value.split(" ");

  //   userIdRef.current.value = "";
  //   postTitleRef.current.value = "";
  //   postBodyRef.current.value = "";
  //   postReactionRef.current.value = "";
  //   postTagRef.current.value = "";

  //   fetch("https://dummyjson.com/posts/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       userId,
  //       title,
  //       body,
  //       reactions,
  //       tags,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((resData) => addList(resData));

  //   setSelectedItem("Home");

  //   // addList(id, userId, title, body, reactions, tags);
  //   //  console.log(userId, title, body, reactions, tags);
  // };
  return (
    <>
      <Form>
        <div className="mb-3 formHeading">
          <label htmlFor="UserId" className="form-label">
            UserId
          </label>
          <input
            type="text"
            className="form-control"
            id="UserId"
            ref={userIdRef}
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions"
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
            name="tags"
            placeholder="Enter Your hashtags.."
          />
        </div>
        <div className="submit">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </Form>
    </>
  );
};

export async function postListRouter(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      title,
      body,
      reactions,
      tags,
    }),
  })
    .then((res) => res.json())
    .then((resData) => addList(resData));
}

export default CreatePost;
