import { useState } from "react";

const Change = () => {
  const [value, setValue] = useState();
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <form>
      <label>
        Input:
        <input type="text" value={value} onChange={handleInput} />
      </label>
    </form>
  );
};

export default Change;
