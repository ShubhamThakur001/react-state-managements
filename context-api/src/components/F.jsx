import React from "react";
import { useCounterContext } from "../context/Mycontext";

const F = () => {
  const { error } = useCounterContext();

  return (
    <div
      className={`text-center h-12 border-2 py-2 px-1 my-2 mx-1 ${
        error
          ? "text-red-500 border-red-600 bg-red-100"
          : "text-white border-indigo-700 bg-indigo-800"
      }`}
    >
      {error ? error : "Error Will Show Here"}
    </div>
  );
};

export default F;
