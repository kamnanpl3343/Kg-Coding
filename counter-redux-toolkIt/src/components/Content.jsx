import React from "react";
import { useSelector } from "react-redux";

const Content = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <>
      <p className="lead mb-4">The Count is:{counterVal}</p>
    </>
  );
};

export default Content;
