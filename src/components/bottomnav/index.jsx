import React from "react";
import { Link, useLocation } from "react-router";
import "./style.css";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope
} from "react-icons/fa";

const SectionNav = () => {
  const location = useLocation();
  
  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: FaHome
    },
    {
      path: "/about", 
      label: "About",
      icon: FaUser
    },
    {
      path: "/portfolio",
      label: "Projects", 
      icon: FaBriefcase
    },
    {
      path: "/contact",
      label: "Contact",
      icon: FaEnvelope
    }
  ];

  return (
    <div className="stick_nav_icon">
      <ul>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                <IconComponent />
              </Link>
            </li>
          );
        })}
      </ul>
      <p>Sections</p>
    </div>
  );
};

export default SectionNav;
