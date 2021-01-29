import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const decreaseValue = () => {
    setValue((prevState) => {
      return prevState - 1;
    });
  };

  const increaseValue = () => {
    setValue((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button id="minus" className="btn" onClick={decreaseValue}>
          -
        </button>
        <button className="btn" onClick={reset}>
          C
        </button>
        <button id="add" className="btn" onClick={increaseValue}>
          +
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
