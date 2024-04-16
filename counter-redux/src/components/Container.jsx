import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="card px-4 py-5 my-5 text-center" style={{ width: "70%" }}>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};

export default Container;
