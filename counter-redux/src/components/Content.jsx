import React from "react";
import { useSelector } from "react-redux";

const Content = () => {
  const CounterVal = useSelector((store) => store.counter);
  return (
    <>
      <p className="lead mb-4">The Count is:{CounterVal}</p>
    </>
  );
};

export default Content;
