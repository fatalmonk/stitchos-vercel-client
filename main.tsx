import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "process", element: <Process /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> }
  ]}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><RouterProvider router={router} /></React.StrictMode>
);
