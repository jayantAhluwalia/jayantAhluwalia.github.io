import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  HashRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/work",
//     element: <Work />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
        <Route path="/work" Component={Work} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </React.StrictMode>
  </HashRouter>
);
