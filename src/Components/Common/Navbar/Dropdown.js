/*eslint-disable*/
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MenuItems } from "./MenuItems/MenuItems";
import { MenuItems1 } from "./MenuItems/MenuItems1";
import { MenuItems2 } from "./MenuItems/MenuItems2";
import { MenuItems3 } from "./MenuItems/MenuItems3";
import { MenuItems4 } from "./MenuItems/MenuItems4";
import { MenuItems5 } from "./MenuItems/MenuItems5";
import { MenuItems6 } from "./MenuItems/MenuItems6";

import "./Dropdown.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Dropdown(props) {
  const history = useHistory();
  let Menulist;
  // alert(props.type);

  if (props.Menutype == "DIS") {
    Menulist = MenuItems1;
  } else if (props.Menutype == "ADM") {
    Menulist = MenuItems;
  } else if (props.Menutype == "STD") {
    Menulist = MenuItems2;
  } else if (props.Menutype == "MED") {
    Menulist = MenuItems3;
  } else if (props.Menutype == "CON") {
    Menulist = MenuItems4;
  } else if (props.Menutype == "USE") {
    Menulist = MenuItems5;
  } else if (props.Menutype == "VID") {
    Menulist = MenuItems6;
  }

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? "heropanti-menu clicked" : "heropanti-menu"}
    >
      {Menulist.map((item, index) => {
        return (
          <li key={index} hidden={item.hide}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
