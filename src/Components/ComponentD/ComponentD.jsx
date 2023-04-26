import React, { useRef } from "react";
import "./component.scss";

const ComponentD = () => {
  const name = useRef("");
  const lastName = useRef("");
  const age = useRef("");
  const job = useRef("");
  const salary = useRef("");
  const myStyle = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "green",
  };

  return (
    <>
      <form className="form form-control">
        <div className="inputs">
          <label>
            <h5> Name:</h5>
            <input ref={name} type="text" placeholder="FirstName..." required />
          </label>
          <label>
            <h5> LastName:</h5>
            <input
              ref={lastName}
              type="text"
              placeholder="LastName..."
              required
            />
          </label>
          <label>
            <h5> Age:</h5>
            <input
              ref={age}
              type="number"
              min={1}
              placeholder="Age..."
              required
            />
          </label>
          <label>
            <h5> Job:</h5>
            <input ref={job} type="text" placeholder="Job..." required />
          </label>
          <label>
            <h5> Salary:</h5>
            <input
              ref={salary}
              type="number"
              min={0}
              placeholder="Salary..."
              required
            />
          </label>
        </div>
        <div className="btn">
          <button className="form-control btn btn-info">Send</button>
        </div>
      </form>
      <div className="about" style={myStyle}>
        <div className="div div-1">k</div>
        <div className="div div-2">2</div>
        <div className="div div-3">a</div>
        <div className="div div-4">g</div>
        <div className="div div-5">vaer</div>
      </div>
    </>
  );
};

export default ComponentD;
