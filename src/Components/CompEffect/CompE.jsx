import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./compf.scss";
import axios from "axios";
const CompE = () => {
  const [resourceType, setResourseType] = useState("Barbados");
  const [data, setData] = useState([]);
  const [dataOther, setDataOther] = useState([]);
  const [search, setSearch] = useState("");

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

  const myData = data
    .filter((data) => {
      if (!search.trim()) {
        return data;
      } else if (
        data?.name?.common.toLowerCase().includes(search.toLowerCase().trim())
      ) {
        return data;
      }
    })
    .map((item) => (
      <div key={item.name.common} className="card">
        <img className="img w-100" src={item.flags.svg} alt={item.flags.alt} />
        <h3 className={search ? "text-danger" : ""} key={item.name.common}>
          {item.name.common}
        </h3>
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
    ));

  return (
    <div>
      <form className="form form-control d-flex justify-content-around align-items-center py-5 my-5">
        <input
          type="text"
          value={search}
          className="form-control input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-info px-4" type="button">
          {myData.length ? myData.length : 0}
        </button>
      </form>
      <div className="cards">{myData}</div>
    </div>
  );
};

export default CompE;
