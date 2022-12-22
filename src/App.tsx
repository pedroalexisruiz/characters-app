import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./themes/default";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
