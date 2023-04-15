import bmw from "../assets/image/bmw.jpeg";

function ComponentA() {
  return (
    <div>
      <img width={250} src={bmw} alt="bmw"></img>
      <h1>ComponentA</h1>
      <p>Hello World A !</p>
    </div>
  );
}
export default ComponentA;
