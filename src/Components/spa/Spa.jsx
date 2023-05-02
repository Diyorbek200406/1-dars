import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./spa.scss";
import axios from "axios";
import { NavLink } from "react-bootstrap";
const Spa = () => {
  const id = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${id.id}`
      );
      const res = response.data[0];
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="spa">
      <div className="left">
        <Link className="homepage" to="/">
          Home Page
        </Link>
        <img className="flag" src={data.flags?.svg} alt={data.flags?.alt} />
      </div>
      <div className="right">
        <h1 style={{ textAlign: "center" }}> {data.name?.common}</h1>

        <h3>
          Capital : <span>{data.capital}</span>
        </h3>
        <h3>
          Population : <span> {data.population}</span>
        </h3>
        <h3>
          Maydoni : <span> {data.area} kv.km</span>
        </h3>

        <h3>
          Telefon Suffix :
          <span>
            {data?.idd?.root}
            {data?.idd?.suffixes}
          </span>
        </h3>
        <h3>
          Borders :
          <span>
            {data?.borders
              ? data.borders?.map((border) => {
                  return (
                    <Link
                      to={`name/${border?.name?.common}`}
                      className="btn btn-danger mx-2"
                      key={border}
                    >
                      {border}
                    </Link>
                  );
                })
              : "No Borders !"}
          </span>
        </h3>
      </div>

      {console.log(data)}
    </div>
  );
};

export default Spa;
