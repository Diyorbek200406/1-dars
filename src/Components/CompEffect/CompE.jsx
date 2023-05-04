import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./compf.scss";
import axios from "axios";
const CompE = () => {
  const [resourceType, setResourseType] = useState("Barbados");
  // const [resourceType2, setResourseType2] = useState("posts2");
  const [data, setData] = useState([]);
  const [dataOther, setDataOther] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataOther = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${resourceType}`
      );
      setDataOther(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Others = () => {
    return (
      <div>
        <h1>{console.log(dataOther[0])}</h1>
      </div>
    );
  };
  useEffect(() => {
    getData();
    getDataOther();
  }, [resourceType]);

  return (
    <div>
      {console.log(data[0])}
      <div className="cards">
        {data.map((item) => (
          <div key={item.name.common} className="card">
            <img
              className="img w-100"
              src={item.flags.svg}
              alt={item.flags.alt}
            />
            <h3 key={item.name.common}>{item.name.common}</h3>
            <p>{item.capital}</p>
            <p>Population : {item.population}</p>
            <p>Region : {item.region}</p>
            <div
              onClick={() => {
                setResourseType(item.name.common);
                Others();
              }}
              className="container"
            >
              <span>
                <Link className="py-1" to={`name/${item.name.common}`}>
                  Read More
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompE;
