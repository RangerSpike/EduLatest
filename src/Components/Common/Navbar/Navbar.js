/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [video, setVideo] = useState(false);
  const [discoverDropDown, setDiscoverDropDown] = useState(false);
  const [admissionDropdown, setAdmissionDropdown] = useState(false);
  const [studentDropdown, setStudentDropdown] = useState(false);
  const [mediaDropdown, setMediaDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);

  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    setCurrentUser(localStorage.getItem('Role'));
    console.log(localStorage.getItem('Role'));
  }, []);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (menuType) => {
    if (menuType == "USE") {
      if (window.innerWidth < 960) {
        setUserDropDown(false);
      } else {
        setUserDropDown(true);
      }
    } else if (menuType == "DIS") {
      if (window.innerWidth < 960) {
        setDiscoverDropDown(false);
      } else {
        setDiscoverDropDown(true);
      }
    } else if (menuType == "ADM") {
      if (window.innerWidth < 960) {
        setAdmissionDropdown(false);
      } else {
        setAdmissionDropdown(true);
      }
    } else if (menuType == "STD") {
      if (window.innerWidth < 960) {
        setStudentDropdown(false);
      } else {
        setStudentDropdown(true);
      }
    } else if (menuType == "MED") {
      if (window.innerWidth < 960) {
        setMediaDropdown(false);
      } else {
        setMediaDropdown(true);
      }
    } else if (menuType == "CON") {
      if (window.innerWidth < 960) {
        setContactDropdown(false);
      } else {
        setContactDropdown(true);
      }
    } else if (menuType == "VID") {
      if (window.innerWidth < 960) {
        setVideo(false);
      } else {
        setVideo(true);
      }
    }
  };

  const onMouseLeave = (menuType) => {
    if (menuType == "USE") {
      if (window.innerWidth < 960) {
        setUserDropDown(false);
      } else {
        setUserDropDown(false);
      }
    } else if (menuType == "DIS") {
      if (window.innerWidth < 960) {
        setDiscoverDropDown(false);
      } else {
        setDiscoverDropDown(false);
      }
    } else if (menuType == "ADM") {
      if (window.innerWidth < 960) {
        setAdmissionDropdown(false);
      } else {
        setAdmissionDropdown(false);
      }
    } else if (menuType == "STD") {
      if (window.innerWidth < 960) {
        setStudentDropdown(false);
      } else {
        setStudentDropdown(false);
      }
    } else if (menuType == "MED") {
      if (window.innerWidth < 960) {
        setMediaDropdown(false);
      } else {
        setMediaDropdown(false);
      }
    } else if (menuType == "CON") {
      if (window.innerWidth < 960) {
        setContactDropdown(false);
      } else {
        setContactDropdown(false);
      }
    } else if (menuType == "VID") {
      if (window.innerWidth < 960) {
        setVideo(false);
      } else {
        setVideo(false);
      }
    }
  };

  return (
    <nav className="rabbit">
      <Link to="/" className="rabbit-logo" onClick={closeMobileMenu}>
        <img
          src="madcaplogot.png"
          alt="logo img"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {currentUser === "Admin" ?<li
          className="nav-item"
          onMouseEnter={() => {
            onMouseEnter("USE");
          }}
          onMouseLeave={() => {
            onMouseLeave("USE");
          }}
        >
          <Link className="nav-links" onClick={closeMobileMenu}>
            Users <IoMdArrowDropdown />
          </Link>
          {userDropDown && <Dropdown Menutype="USE" />}
        </li>: null}
        <li
          className="nav-item"
          onMouseEnter={() => {
            onMouseEnter("DIS");
          }}
          onMouseLeave={() => {
            onMouseLeave("DIS");
          }}
        >
          <Link className="nav-links" onClick={closeMobileMenu}>
            Students <IoMdArrowDropdown />
          </Link>
          {discoverDropDown && <Dropdown Menutype="DIS" />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => {
            onMouseEnter("ADM");
          }}
          onMouseLeave={() => {
            onMouseLeave("ADM");
          }}
        >
          <Link className="nav-links" onClick={closeMobileMenu}>
            Teachers <IoMdArrowDropdown />
          </Link>
          {admissionDropdown && <Dropdown Menutype="ADM" />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => {
            onMouseEnter("STD");
          }}
          onMouseLeave={() => {
            onMouseLeave("STD");
          }}
        >
          <Link className="nav-links" onClick={closeMobileMenu}>
            Notice
            <IoMdArrowDropdown />
          </Link>
          {studentDropdown && <Dropdown Menutype="STD" />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => {
            onMouseEnter("MED");
          }}
          onMouseLeave={() => {
            onMouseLeave("MED");
          }}
        >
          <Link className="nav-links" onClick={closeMobileMenu}>
            Result
            <IoMdArrowDropdown />
          </Link>
          {mediaDropdown && <Dropdown Menutype="MED" />}
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => {
            onMouseEnter("CON");
          }}
          onMouseLeave={() => {
            onMouseLeave("CON");
          }}
        >
          <Link className="nav-links" onClick={closeMobileMenu}>
            Exit Form
            <IoMdArrowDropdown />
          </Link>
          {contactDropdown && <Dropdown Menutype="CON" />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => {
            onMouseEnter("VID");
          }}
          onMouseLeave={() => {
            onMouseLeave("VID");
          }}
        >
          <Link className="nav-links" onClick={closeMobileMenu}>
            Discover
            <IoMdArrowDropdown />
          </Link>
          {video && <Dropdown Menutype="VID" />}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
