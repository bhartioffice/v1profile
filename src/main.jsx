import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Ensure this is imported
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* ADD THE BASENAME HERE 👇 */}
    <BrowserRouter basename="/v1profile">
      <App />
    </BrowserRouter>
  </StrictMode>
);
