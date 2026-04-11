import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import { Provider } from "react-redux";
// import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
