import React from "react";
import "./component.scss";

const ComponentD = () => {


    
  return (
    <>
      <form className="form form-control">
        <div className="inputs">
          <label>
            <h5> Name:</h5>
            <input type="text" placeholder="FirstName..." required />
          </label>
          <label>
            <h5> LastName:</h5>
            <input type="text" placeholder="LastName..." required />
          </label>
          <label>
            <h5> Age:</h5>
            <input type="number" min={1} placeholder="Age..." required />
          </label>
          <label>
            <h5> Job:</h5>
            <input type="text" placeholder="Job..." required />
          </label>
          <label>
            <h5> Salary:</h5>
            <input type="number" min={0} placeholder="Salary..." required />
          </label>
        </div>
        <div className="btn">
          <button className="form-control btn btn-info">Send</button>
        </div>
      </form>
      <div className="about">
        <div className="div div-1"></div>
        <div className="div div-2">2</div>
        <div className="div div-3">a</div>
        <div className="div div-4"></div>
        <div className="div div-5">vaer</div>
      </div>
    </>
  );
};

export default ComponentD;
