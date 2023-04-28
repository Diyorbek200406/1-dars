import { useState, useEffect } from "react";
import axios from "axios";
import "./F.scss";
const ComponentF = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all
        `);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((item) => (
        <h3 key={item.name.common}>{item.name.common}</h3>
      ))}
    </>
  );
};

export default ComponentF;
