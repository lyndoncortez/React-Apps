import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("Random Title");

  const handleClick = () => {
    setTitle("Hello World!");
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
