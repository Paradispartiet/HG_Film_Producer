import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("HG Film Producer requires a #root element.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
