import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

import { TraderProvider } from "./Context/Context";
import Stocks from "./pages/stocks";
import All from "./pages/all";
import Options from "./pages/options";

// Create a default Material-UI theme
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TraderProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/options" element={<Options />} />
          </Routes>
        </BrowserRouter>
      </TraderProvider>
    </ThemeProvider>
  );
}

export default App;
