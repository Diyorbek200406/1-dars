import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const handleCoun = () => {
    setCount(count - 1);
  };

  return (
    <MyContext.Provider value={{ count, handleCount, handleCoun }}>
      {children}
    </MyContext.Provider>
  );
};
