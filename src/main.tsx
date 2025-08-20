import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ZooApp } from "./ZooApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ZooApp></ZooApp>
  </StrictMode>
);
