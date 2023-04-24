import ComponentModal from "../ComponentModal/ComponentModal";
import "./ComponentHeader.scss";
import { useState } from "react";
const ComponentHeader = (count) => {
  const [sidebar, setSidebar] = useState(true);

  const handleSidebar = () => {
    setSidebar(false);
  };
  const handleSidebarClose = () => {
    setSidebar(true);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="navbar">
          <div
            className={
              sidebar ? (sidebar ? "sidebar" : "sidebar open") : "sidebar on"
            }
          >
            <div className="top">
              <button
                className="btn btn-outline-warning"
                onClick={handleSidebarClose}
              >
                Close
              </button>
            </div>
            <div className="bottom">
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
            </div>
          </div>
          <button className="nav btn btn-info" onClick={handleSidebar}>
            <h2>React User Application</h2>
          </button>
        </div>

        <div className="madal">
          <ComponentModal count={count} />
        </div>
      </div>
    </div>
  );
};

export default ComponentHeader;
