import React from "react";
import ReactDOM from "react-dom";

import SubMain from "./SubMain";
import { ContextProvider } from "./Context";

import "./styles.css";

function Main() {
  return (
    <>
      <ContextProvider>
        <SubMain />
      </ContextProvider>
    </>
  );
}
export default Main;
