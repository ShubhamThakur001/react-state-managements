import { createContext, useContext, useState } from "react";

const Mycontext = createContext(null);

const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("");
  const isDisable = counter < 0;

  const value = {
    counter,
    setCounter,
    error,
    setError,
    isDisable,
  };
  return <Mycontext.Provider value={value}>{children}</Mycontext.Provider>;
};

const useCounterContext = () => {
  const context = useContext(Mycontext);

  if (!context) {
    throw new Error(
      "useCounterContext must be used inside CounterContextProvider"
    );
  }

  return context;
};

export { CounterContextProvider, useCounterContext };
