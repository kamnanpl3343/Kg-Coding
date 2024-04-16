import React, { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { PostListContext } from "../store/Store";

const Post = ({ post }) => {
  const { deleteList } = useContext(PostListContext);
  return (
    <>
      <div className="card text-center">
        <h3 className="card-header text-center postTitle">{post.title}</h3>

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <FaDeleteLeft onClick={() => deleteList(post.id)} />
        </span>
        <div className="card-body">
          <div className="postBody">
            <p className="card-text postBodyContent">{post.body}</p>
          </div>
          <span className="badge text-bg-info hashtag">{post.tags}</span>
          {/* {post.tags.map((tagItm) => (
            <span className="badge text-bg-info hashtag" key={tagItm}>
              {tagItm}
            </span>
          ))} */}

          <div className="btn bg-primary-subtle btn-sm col-12" role="alert">
            This Post has been reacted by{post.reactions} people
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
