import { useRef } from "react";

const UseRef = () => {
  const input = useRef();
  let inputValue;
  const handleClick = (e) => {
    e.preventDefault();
    const iValue = input.current.value;
    inputValue = iValue;
    console.log(inputValue);
  };
  return (
    <>
      <form>
        <label>
          Name:
          <input type="text" ref={input} />
        </label>
        <button onClick={handleClick}>Get Data</button>
      </form>
      <div>{inputValue} salom</div>
    </>
  );
};

export default UseRef;
