import "./index.css";

import React from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/home"));
const Test = lazy(() => import("@/pages/test"));

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route key="app" path="/" element={<App />}>
          <Route key={Test.name} element={<Test />} path="/test"></Route>
          <Route key={Home.name} element={<Home />} path="/app"></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
