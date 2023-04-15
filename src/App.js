import "./App.css";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import Sidebar from "./Components/Sidebar";

function App() {
  console.log("Hello Diyorbek");
  return (
    <>
      <Sidebar />
      <ComponentA />
      <ComponentB />
    </>
  );
}
export default App;
