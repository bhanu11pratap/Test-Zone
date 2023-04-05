import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
const colors = {
  primary: {
    50: "#e0f2fe",
    100: "#b3e0fd",
    200: "#80caff",
    300: "#4da9ff",
    400: "#1a87ff",
    500: "#0066ff",
    600: "#004fe6",
    700: "#0039c2",
    800: "#002499",
    900: "#001466",
  },
};

const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
