import React, { useState } from "react";
import CounterValue from "./CounterValue";

const Counter = () => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleCountText = (e) => {
    const countStr = e.target.value;
    if (!countStr) {
      setCount(countStr);
      return;
    }
    setCount(countStr && parseInt(countStr));
  };

  return (
    <>
      <div className="counterBody">
        <span
          className="decrement"
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          -
        </span>
        <input
          className="count"
          type="text"
          value={count}
          onChange={handleCountText}
        />
        <span className="increment" onClick={incrementCount}>
          +
        </span>
      </div>
      <CounterValue count={count} />
    </>
  );
};

export default Counter;
