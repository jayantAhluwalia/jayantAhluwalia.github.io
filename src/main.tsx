import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
        <Route path="/work" Component={Work} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </React.StrictMode>
  </HashRouter>
);
