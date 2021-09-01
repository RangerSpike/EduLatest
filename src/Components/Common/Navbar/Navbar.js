/*eslint-disable*/
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [discoverDropDown, setDiscoverDropDown] = useState(false);
  const [admissionDropdown, setAdmissionDropdown] = useState(false);
  const [studentDropdown, setStudentDropdown] = useState(false);
  const [mediaDropdown, setMediaDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (menuType) => {

    if (menuType == "DIS") {
      if (window.innerWidth < 960) {
        setDiscoverDropDown(false);
      } else {
        setDiscoverDropDown(true);
      }
    }
    else if (menuType == "ADM") {
      if (window.innerWidth < 960) {
        setAdmissionDropdown(false);
      } else {
        setAdmissionDropdown(true);
      }
    }
    else if (menuType == "STD") {
      if (window.innerWidth < 960) {
        setStudentDropdown(false);
      } else {
        setStudentDropdown(true);
      }
    }
    else if (menuType == "MED") {
      if (window.innerWidth < 960) {
        setMediaDropdown(false);
      } else {
        setMediaDropdown(true);
      }
    }
    else if (menuType == "CON") {
      if (window.innerWidth < 960) {
        setContactDropdown(false);
      } else {
        setContactDropdown(true);
      }
    }


  };

  const onMouseLeave = (menuType) => {

    if (menuType == "DIS") {
      if (window.innerWidth < 960) {
        setDiscoverDropDown(false);
      } else {
        setDiscoverDropDown(false);
      }
    }
    else if (menuType == "ADM") {
      if (window.innerWidth < 960) {
        setAdmissionDropdown(false);
      } else {
        setAdmissionDropdown(false);
      }
    }
    else if (menuType == "STD") {
      if (window.innerWidth < 960) {
        setStudentDropdown(false);
      } else {
        setStudentDropdown(false);
      }
    }
    else if (menuType == "MED") {
      if (window.innerWidth < 960) {
        setMediaDropdown(false);
      } else {
        setMediaDropdown(false);
      }
    }
    else if (menuType == "CON") {
      if (window.innerWidth < 960) {
        setContactDropdown(false);
      } else {
        setContactDropdown(false);
      }
    }
  };

  return (

    <nav className='rabbit'>
      <Link to='/' className='rabbit-logo' onClick={closeMobileMenu}>
        <img src="madcaplogot.png" alt="logo img" width="100" height="100" className="d-inline-block align-top" />

      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li
          className='nav-item'
          onMouseEnter={() => { onMouseEnter("DIS") }}
          onMouseLeave={() => { onMouseLeave("DIS") }}
        >
          <Link
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Students <IoMdArrowDropdown />
          </Link>
          {discoverDropDown && <Dropdown Menutype="DIS" />}
        </li>
        <li
          className='nav-item'
          onMouseEnter={() => { onMouseEnter("ADM") }}
          onMouseLeave={() => { onMouseLeave("ADM") }}
        >
          <Link

            className='nav-links'
            onClick={closeMobileMenu}
          >
            Teachers <IoMdArrowDropdown />
          </Link>
          {admissionDropdown && <Dropdown Menutype="ADM" />}
        </li>
        <li
          className='nav-item'
          onMouseEnter={() => { onMouseEnter("STD") }}
          onMouseLeave={() => { onMouseLeave("STD") }}
        >
          <Link

            className='nav-links'
            onClick={closeMobileMenu}
          >
            Notice<IoMdArrowDropdown />
          </Link>
          {studentDropdown && <Dropdown Menutype="STD" />}
        </li>
        <li
          className='nav-item'
          onMouseEnter={() => { onMouseEnter("MED") }}
          onMouseLeave={() => { onMouseLeave("MED") }}
        >
          <Link

            className='nav-links'
            onClick={closeMobileMenu}
          >
            Result<IoMdArrowDropdown />
          </Link>
          {mediaDropdown && <Dropdown Menutype="MED" />}
        </li>


        <li
          className='nav-item'
          onMouseEnter={() => { onMouseEnter("CON") }}
          onMouseLeave={() => { onMouseLeave("CON") }}
        >
          <Link
            className='nav-links'
            onClick={closeMobileMenu}>
            Exit Form
            <IoMdArrowDropdown />
          </Link>
          {contactDropdown && <Dropdown Menutype="CON" />}
        </li>
      </ul>

    </nav>

  );
}

export default Navbar;
