import React from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";
import App from "./App";
import {ChakraProvider} from "@chakra-ui/react";
import {cauTheme} from "./shared/CAUTheme";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <ChakraProvider theme={cauTheme}>
          <App />
      </ChakraProvider>
  </React.StrictMode>
);
