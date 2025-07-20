import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import "./style.css";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

const SectionNav = () => {
  const location = useLocation();
  const [isLightMode, setIsLightMode] = useState(false);
  const isHomePage = location.pathname === "/";

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

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: FaHome,
    },
    {
      path: "/about",
      label: "About",
      icon: FaUser,
    },
    {
      path: "/portfolio",
      label: "Projects",
      icon: FaBriefcase,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: FaEnvelope,
    },
  ];

  const navigationClass = `stick_nav_icon ${isHomePage && isLightMode ? 'home-light-mode' : ''}`;

  return (
    <div className={navigationClass}>
      <p>Sections</p>
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
    </div>
  );
};

export default SectionNav;
