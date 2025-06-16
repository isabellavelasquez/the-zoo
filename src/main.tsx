import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ZooApp } from "./ZooApp";
import { AnimalCard } from "./components/AnimalCard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ZooApp></ZooApp>
  </StrictMode>
);
