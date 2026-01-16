import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes automatically
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Function to manually close menu (attached to links)
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="header">
        <nav className="navbar container">
          {/* LOGO */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <div className="logo-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <span className="logo-text">Prof. Nalin Bharti</span>
          </Link>

          {/* MOBILE OVERLAY (Click to close) */}
          <div
            className={`nav-overlay ${isMobileMenuOpen ? "active" : ""}`}
            onClick={closeMenu}
          ></div>

          {/* NAVIGATION MENU */}
          <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li>
                <NavLink to="/" className="nav-link" end onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                  About
                </NavLink>
              </li>

              {/* DROPDOWN: RESEARCH */}
              <li className="has-dropdown">
                <NavLink
                  to="/research"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Research & Teaching{" "}
                  <i className="fa-solid fa-chevron-down mobile-dropdown-icon"></i>
                </NavLink>
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link
                      to="/research"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Research Areas
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/research"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Teaching
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/research"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      DPIIT IPR Chair
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/research"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Invited Talks
                    </Link>
                  </li>
                </ul>
              </li>

              {/* DROPDOWN: PUBLICATIONS */}
              <li className="has-dropdown">
                <NavLink
                  to="/publications"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Publications{" "}
                  <i className="fa-solid fa-chevron-down mobile-dropdown-icon"></i>
                </NavLink>
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link
                      to="/publications"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Books
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/publications"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Book Chapters
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/publications"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Journal Articles
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/publications"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Conferences
                    </Link>
                  </li>
                </ul>
              </li>

              {/* DROPDOWN: PEOPLE */}
              <li className="has-dropdown">
                <NavLink to="/people" className="nav-link" onClick={closeMenu}>
                  People{" "}
                  <i className="fa-solid fa-chevron-down mobile-dropdown-icon"></i>
                </NavLink>
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link
                      to="/people"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      PhD Students
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/people"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Alumni
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/people"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Research Staff
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/people"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Interns
                    </Link>
                  </li>
                </ul>
              </li>

              {/* DROPDOWN: AWARDS */}
              <li className="has-dropdown">
                <NavLink to="/awards" className="nav-link" onClick={closeMenu}>
                  Awards & Media{" "}
                  <i className="fa-solid fa-chevron-down mobile-dropdown-icon"></i>
                </NavLink>
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link
                      to="/awards"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Awards & Honors
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/awards"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Media Coverage
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/awards"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* RIGHT CONTROLS (Only Mobile Menu Toggle) */}
          <div className="nav-right-group">
            <button
              className="hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <i
                className={`fa-solid ${
                  isMobileMenuOpen ? "fa-xmark" : "fa-bars"
                }`}
              ></i>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
