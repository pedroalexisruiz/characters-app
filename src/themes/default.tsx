import React from "react";
import { createGlobalStyle } from "styled-components";

export const theme = {
  main: "steelblue",
};

export const GlobalStyle = createGlobalStyle`
body {
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic');
  font-family: "RobotoDraft", "Roboto", "Helvetica Neue, Helvetica, Arial",
    sans-serif;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.01rem;
  color: #212121;
  background-color: #f5f5f5;
}
`;
