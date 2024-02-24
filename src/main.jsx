import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <AnimatePresence mode="wait">
        <RouterProvider router={routes}></RouterProvider>
      </AnimatePresence>
    </div>
  </React.StrictMode>
);
