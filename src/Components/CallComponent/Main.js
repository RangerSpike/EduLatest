/* eslint-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
import React from "react";
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
