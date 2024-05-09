import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPages from "./pages/LandingPages.jsx";
import EcesiPages from "./pages/EcesiPages.jsx";
import EcesshPages from "./pages/EcesshPages.jsx";
import EctcsPages from "./pages/EctcsPages.jsx";
import EcesiAboutPages from "./pages/EcesiAboutPages.jsx";
import EcesshAboutPages from "./pages/EcesshAboutPages.jsx";
import EctcsAboutPages from "./pages/EctcsAboutPages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPages />,
  },
  {
    path: "ecesi",
    element: <EcesiPages />,
  },
  {
    path: "ecesi/about",
    element: <EcesiAboutPages />,
  },
  {
    path: "ecessh",
    element: <EcesshPages />,
  },
  {
    path: "ecessh/about",
    element: <EcesshAboutPages />,
  },
  {
    path: "ectcs",
    element: <EctcsPages />,
  },
  {
    path: "ectcs/about",
    element: <EctcsAboutPages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
