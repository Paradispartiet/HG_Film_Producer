import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { installProductionCaseVerificationMarkers } from "./data/productionCaseVerificationLibrary";
import "./styles.css";
import "./productionCaseDensity.css";
import "./productionCaseVerification.css";
import "./productionCaseVerificationLibrary.css";

console.info("HG Film Producer booting");

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("HG Film Producer requires a #root element.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

installProductionCaseVerificationMarkers();
