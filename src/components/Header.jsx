import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", !isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        style={{
          width: `${scrollProgress}%`,
          position: "fixed",
          top: 0,
          left: 0,
          height: "4px",
          background: "var(--color-accent)",
          zIndex: 9999,
        }}
      ></div>

      <header className="header">
        <nav className="navbar container">
          {/* 1. Logo Section */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <div className="logo-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <span className="logo-text">Prof. Nalin Bharti</span>
          </Link>

          {/* 2. Navigation Menu */}
          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={closeMenu}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>

              <li className="has-dropdown">
                <NavLink
                  to="/research"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={closeMenu}
                >
                  Research &amp; Teaching{" "}
                  <i className="fa-solid fa-chevron-down mobile-dropdown-icon"></i>
                </NavLink>
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link
                      to="/research#research"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Research Areas
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/research#teaching"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Teaching
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/research#dpiit"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      DPIIT IPR Chair
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/research#talks"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Invited Talks
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="has-dropdown">
                <NavLink
                  to="/publications"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={closeMenu}
                >
                  Publications{" "}
                  <i className="fa-solid fa-chevron-down mobile-dropdown-icon"></i>
                </NavLink>
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link
                      to="/publications#books"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Books
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/publications#chapters"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Book Chapters
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/publications#articles"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Journal Articles
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/publications#conferences"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Conferences
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="has-dropdown">
                <NavLink
                  to="/people"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={closeMenu}
                >
                  People{" "}
                  <i className="fa-solid fa-chevron-down mobile-dropdown-icon"></i>
                </NavLink>
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link
                      to="/people#phd-students"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      PhD Students
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/people#alumni"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Alumni
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/people#research-staff"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Research Staff
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/people#interns"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Interns
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="has-dropdown">
                <NavLink
                  to="/awards"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={closeMenu}
                >
                  Awards &amp; Media{" "}
                  <i className="fa-solid fa-chevron-down mobile-dropdown-icon"></i>
                </NavLink>
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link
                      to="/awards#awards-honors"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Awards & Honors
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/awards#media-coverage"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Media Coverage
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/awards#gallery-photos"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 3. Right Group (Only Hamburger remains) */}
          <div className="nav-right-group">
            <button
              className="hamburger"
              onClick={toggleMenu}
              aria-label="Toggle Navigation"
            >
              <i className="fa-solid fa-bars hamburger-icon"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Header;
