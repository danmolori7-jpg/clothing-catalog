import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
//getElementById HTMLElement | null поэтому выполняем сужение типа дальше ТС понимает что у нас  HTMLElement

if (rootElement === null) {
  throw new Error("Не найден элемент root");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
