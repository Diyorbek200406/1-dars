import { useState, useEffect } from "react";
import axios from "axios";
import "./F.scss";
const ComponentF = () => {
  const [resourceType, setResourseType] = useState("users");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response =
        await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}
        `);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };
  useEffect(() => {
    setLoading(true);
    getData();
  }, [resourceType]);

  if (loading) {
    return <div className="custom-loader"></div>;
  }

  return (
    <>
      <button
        className="btn btn-info m-3"
        onClick={() => setResourseType("users")}
      >
        Users
      </button>
      <button
        className="btn btn-info m-3"
        onClick={() => setResourseType("comments")}
      >
        Comments
      </button>

      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </>
  );
};

export default ComponentF;
