import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MouseContextProvider from "./components/context/mouse-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </StrictMode>
);
