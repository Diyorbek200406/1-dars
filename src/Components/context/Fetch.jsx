import { createContext, useState, useEffect } from "react";
export const FetchContext = createContext();
export const FetchContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const datares = await response.json();
      setData(datares);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoader(true);
    fetchData();
  });

  return (
    <FetchContext.Provider value={{ data, loader }}>
      {children}
    </FetchContext.Provider>
  );
};
