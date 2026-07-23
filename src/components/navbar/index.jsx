import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { logoText, socialProfiles } from "../../content_option.js";
import Themetoggle from "../themetoggle/index.jsx";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/resume", label: "Resume" },
  { path: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      menuRef.current?.querySelector("a, button")?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <nav className="navbar__nav" aria-label="Primary">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          {logoText}
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="navbar-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div
          id="navbar-menu"
          ref={menuRef}
          className={`navbar__menu${open ? " navbar__menu--open" : ""}`}
        >
          <ul className="navbar__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? " navbar__link--active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a
              href={socialProfiles.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="navbar__icon-link"
            >
              <FaGithub aria-hidden="true" focusable="false" />
            </a>
            <a
              href={socialProfiles.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="navbar__icon-link"
            >
              <FaLinkedin aria-hidden="true" focusable="false" />
            </a>
            <Themetoggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
