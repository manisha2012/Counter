import React, { useEffect, useState } from "react";
import axios from "axios";
import CounterValue from "./CounterValue";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const MAX_COUNT = process.env.REACT_APP_MAX_VALUE || 1000;

  useEffect(() => {
    getInitialCount();
  }, []);

  useEffect(() => {
    saveCount();
  }, [count]);

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

  const saveCount = async () => {
    try {
      setLoading(true);
      const countValue = { counter1: count };
      axios.put(
        "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/8387039003.json",
        countValue
      );
      setLoading(false);
    } catch (err) {
      console.log({ err });
      setLoading(false);
    }
  };

  const incrementCount = () => {
    setCount((prevCount) => {
      const prevCountInt = parseInt(prevCount) || 0;
      if (prevCountInt < MAX_COUNT) {
        return prevCountInt + 1;
      }
      return prevCountInt;
    });
  };

  const decerementCount = () => {
    setCount((prevCount) => {
      const prevCountInt = parseInt(prevCount) || 0;
      return prevCountInt - 1;
    });
  };

  const handleCountText = (e) => {
    const countStr = e.target.value;
    if (!countStr) {
      setCount(countStr);
      return;
    }
    if (countStr && parseInt(countStr) <= MAX_COUNT)
      setCount(parseInt(countStr));
  };

  return (
    <>
      {loading && (
        <div className="loaderDiv">
          <div className="loader"></div>
          <div>Saving counter value</div>
        </div>
      )}
      <div className="counterBody">
        <span className="decrement" onClick={decerementCount}>
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
