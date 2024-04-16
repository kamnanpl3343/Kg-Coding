
import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center w-100 m-5">
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
