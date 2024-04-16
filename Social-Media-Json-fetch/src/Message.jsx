// import React from "react";

const Message = ({ OnFetchData }) => {
  return (
    <center className="msg d-flex align-items-center">
      <span className="h1 display-5 fw-bold m-4">
        No Items Left In the List
      </span>

      {/*<button type="button" className="btn btn-primary" onClick={OnFetchData}>
        Get Post From The Server
      </button>*/}
    </center>
  );
};

export default Message;
