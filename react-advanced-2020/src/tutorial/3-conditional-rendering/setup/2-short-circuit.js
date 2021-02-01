import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Hey");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>
        {text || "John Doe"} {isError && "Error..."}
      </h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
    </>
  );
};

export default ShortCircuit;
