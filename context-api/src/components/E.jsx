import React from "react";
import { useCounterContext } from "../context/Mycontext";
const E = () => {
  const { setCounter, setError } = useCounterContext();

  function reset() {
    setCounter(0);
    setError("");
  }
  return (
    <>
      <button
        onClick={reset}
        className="text-white py-2 px-4 border rounded-2xl cursor-pointer bg-red-500 hover:bg-red-600 my-2 mx-1"
      >
        Reset
      </button>
    </>
  );
};

export default E;
