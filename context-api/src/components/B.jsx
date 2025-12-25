import React from "react";
import { useCounterContext } from "../context/Mycontext";
const B = () => {
  const { counter, setCounter, setError } = useCounterContext();

  function increment() {
    setCounter(counter + 1);
    setError("");
  }
  return (
    <button
      onClick={increment}
      className="text-white py-2 px-4 border rounded-2xl cursor-pointer bg-blue-500 hover:bg-blue-700 my-2 mx-1"
    >
      Increment[+1]
    </button>
  );
};

export default B;
