import React, { useState, useEffect } from "react";
import "./style.css";
import { useLocation, Link } from "react-router";
// import { VscGrabber, VscClose } from "react-icons/vsc";
import { logoText, socialProfiles } from "../content_option.js";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isLightMode, setIsLightMode] = useState(false);

  // Check for light mode by observing the data-theme attribute
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsLightMode(theme === 'light');
    };

    // Initial check
    checkTheme();

    // Create observer for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);
  
  // const [isActive, setActive] = useState("false");

  // const handleToggle = () => {
  //   setActive(!isActive);
  //   document.body.classList.toggle("ovhidden");
  // };

  return (
    <>
      <header 
        className="fixed-top site__header"
        style={{
          backgroundColor: (isHomePage && isLightMode) ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
          backdropFilter: (isHomePage && isLightMode) ? 'blur(10px)' : 'none'
        }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logoText}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            {/* OLD NAVIGATION MENU - COMMENTED OUT FOR FUTURE USE */}
            {/* <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button> */}
          </div>
        </div>

        {/* OLD NAVIGATION MENU - COMMENTED OUT FOR FUTURE USE */}
        {/* <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/portfolio"
                      className="my-3"
                    >
                      {" "}
                      Projects
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      {" "}
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialProfiles.github}>Github</a>
            </div>
            <p className="copyright m-0">copyright __ {logoText}</p>
          </div>
        </div> */}
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
