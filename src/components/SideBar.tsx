import React from "react";
import styled from "styled-components";

const SideBar = styled.div`
  max-width: 15%;
  flex: 1;
  background-color: ${(props) => props.theme.main};
  padding-top: 2rem;
  a {
    color: #fff;
    padding-inline: 1rem;
    text-decoration: none;
  }
`;

export default SideBar;
