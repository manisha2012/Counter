import React, { useState, useEffect } from "react";
import axios from "axios";
import CounterValue from "./CounterValue";

const Counter = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    getInitialCount();
  }, []);

  const getInitialCount = async () => {
    try {
      const res = await axios.get(
        "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/8387039003.json"
      );
      if (res?.status === 200 && res?.data?.counter1) {
        setCount(res.data.counter1);
      }
    } catch (err) {
      console.log({ err });
    }
  };

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
