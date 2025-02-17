import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./global.css";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider storageKey="dashboard-theme" defaultTheme="system">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
