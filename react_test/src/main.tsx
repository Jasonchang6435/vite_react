import "./index.css";

import React from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

const Home = lazy(() => import("@/pages/home"));
const Test = lazy(() => import("@/pages/test"));

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route key="app" path="/" element={<App />}>
          <Route key={Home.name} element={<Home />} path="app"></Route>
          <Route key={Test.name} element={<Test />} path="test"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
