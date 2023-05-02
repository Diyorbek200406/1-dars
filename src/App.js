import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CompE from "./Components/CompEffect/CompE";
import ComponentHeader from "./Components/ComponentHeader/ComponentHeader.jsx";
import Footer from "./Components/footer/Footer";
import About from "./Components/about/About";
import Error from "./Components/error/Error";
import Spa from "./Components/spa/Spa";
function App() {
  return (
    <>
      <BrowserRouter>
        <ComponentHeader />
        <Routes>
          <Route element={<About />} path="/about" />
          <Route element={<CompE />} path="/" />
          <Route element={<Error />} path="/error404" />
          <Route element={<Navigate to="/error404" />} path="*" />
          <Route element={<Spa />} path="name/:id" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
