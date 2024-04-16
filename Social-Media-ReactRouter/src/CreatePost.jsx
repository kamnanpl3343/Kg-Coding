import React, { useContext, useRef } from "react";
import PostList from "./PostList";
import { PostListData } from "./store/storeList";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const { addList } = useContext(PostListData);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   postAction(addList);
  // };
  return (
    <>
      <Form method="POST">
        <div className="mb-3 formHeading">
          <label htmlFor="UserId" className="form-label">
            UserId
          </label>
          <input
            type="text"
            className="form-control"
            id="UserId"
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

export async function postAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((resObj) => {
      console.log(resObj);
    });
  return redirect("/");
  //navigate("/");
}

export default CreatePost;
