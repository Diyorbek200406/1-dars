import "./ComponentHeader.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <button className="nav btn btn-info" onClick={handleSidebar}>
          Navbar
        </button>
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
              <h1>Hello World</h1>
            </div>
          </div>
        </div>

        <div className="search"></div>
        <div className="link">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/error404">Error 404</NavLink>
        </div>
        {/*
        <div className="madal">
          <ComponentModal count={count} />
        </div> */}
      </div>
    </div>
  );
};

export default ComponentHeader;
