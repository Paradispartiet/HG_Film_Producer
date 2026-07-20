import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { installProductionCaseVerificationMarkers } from "./data/productionCaseVerificationLibrary";
import "./styles.css";
import "./filmverket.css";
import "./filmCraftLibrary.css";
import "./productionCaseDensity.css";
import "./productionCaseVerification.css";
import "./productionCaseVerificationLibrary.css";

console.info("Filmverket · Film Producer booting");

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Filmverket requires a #root element.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

installProductionCaseVerificationMarkers();
