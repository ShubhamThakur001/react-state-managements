import React from "react";
import { useCounterContext } from "../context/Mycontext";

const C = () => {
  const { counter, setCounter, setError, isDisable } = useCounterContext();

  function decrement() {
    if (counter <= 0) {
      setError("Less Than Zero");
    } else {
      setCounter(counter - 1);
      setError("");
    }
  }

  return (
    <button
      onClick={decrement}
      disabled={isDisable}
      className="text-white py-2 px-4 border rounded-2xl cursor-pointer bg-orange-500 hover:bg-orange-700 my-2 mx-1"
    >
      Decrement[-1]
    </button>
  );
};

export default C;
