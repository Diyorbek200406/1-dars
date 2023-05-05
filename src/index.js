import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MyProvider } from "./Components/context/Context";
import { FetchContextProvider } from "./Components/context/Fetch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FetchContextProvider>
    <MyProvider>
      <App />
    </MyProvider>
  </FetchContextProvider>
);
