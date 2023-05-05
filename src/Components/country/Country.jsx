import React from "react";
import { useContext } from "react";
import { FetchContext } from "../context/Fetch";

const Country = () => {
  const { data, loader } = useContext(FetchContext);

  if (loader) {
    console.log("hello world!");
    return <div>Loading...</div>;
  }

  return <div>Country</div>;
};

export default Country;
