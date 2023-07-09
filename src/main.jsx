import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FilterContextProvider from "./context/FilterContextProvider.jsx";
import StaysContextProvider from "./context/StaysContextProvider.jsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterContextProvider>
      <StaysContextProvider>
        <App />
        <Toaster position="top-center" richColors />
      </StaysContextProvider>
    </FilterContextProvider>
  </React.StrictMode>
);
