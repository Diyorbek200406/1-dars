import { useState } from "react";
import "./ComponentA.scss";
import ComponentB from "../ComponentB/ComponentB";
function ComponentA() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState(false);
  const handleCountP = () => {
    setCount(count + 1);
    
  };
  const handleCountM = () => {
    setCount(count - 1);
  };

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <>
      <div className={mode ? "parent dark" : "parent"}>
        <div className="componentA">
          <h1>counter</h1>
          <h1>{count}</h1>
          <button className="btn btn-danger" onClick={handleCountM}>
            -
          </button>
          <button className="btn btn-success" onClick={handleCountP}>+</button>
          <button className="mode btn btn-info" onClick={handleMode}>
            Mode
          </button>
        </div>
        <div className="componentB">
          <ComponentB />
        </div>
      </div>
    </>
  );
}
export default ComponentA;
