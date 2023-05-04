import ComponentB from "../ComponentB/ComponentB";
import "./footer.scss";
import { useContext } from "react";
import { MyContext } from "../context/Context";

const Footer = () => {
  const { handleCount, count, handleCoun } = useContext(MyContext);
  return (
    <div className="footer">
      {count}
      <span onClick={() => handleCoun()}>
        <ComponentB />
      </span>
      <span onClick={() => handleCount()}>Footer</span>
    </div>
  );
};

export default Footer;
