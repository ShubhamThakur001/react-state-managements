import React from "react";
import { useCounterContext } from "./context/Mycontext";
import B from "./components/B";
import C from "./components/C";
import E from "./components/E";
import F from "./components/F";

const App = () => {
  const { counter } = useCounterContext();

  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-screen w-full bg-blue-500 border-2">
      <div>
        <h3 className="text-white text-center font-bold border-2 border-white px-4 py-2 text-3xl">
          Count : {counter}
        </h3>
      </div>
      <div>
        <B />
        <C />
        <E />
        <F />
      </div>
    </div>
  );
};

export default App;
