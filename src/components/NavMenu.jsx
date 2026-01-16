import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  function toggleMenu() {
    setOpen(!open);
    document.body.classList.toggle("no-scroll", !open);
  }

  function closeMenu() {
    setOpen(false);
    document.body.classList.remove("no-scroll");
  }

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className={`nav-menu ${open ? "active" : ""}`}>
        <ul className="nav-list">
          <li>
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>

          <Dropdown title="Research & Teaching">
            <Link to="/research#research" className="dropdown-link">
              Research Areas
            </Link>
            <Link to="/research#teaching" className="dropdown-link">
              Teaching
            </Link>
            <Link to="/research#dpiit" className="dropdown-link">
              DPIIT IPR Chair
            </Link>
            <Link to="/research#talks" className="dropdown-link">
              Invited Talks
            </Link>
          </Dropdown>

          <Dropdown title="Publications">
            <Link to="/publications#books" className="dropdown-link">
              Books
            </Link>
            <Link to="/publications#chapters" className="dropdown-link">
              Book Chapters
            </Link>
            <Link to="/publications#articles" className="dropdown-link">
              Journal Articles
            </Link>
            <Link to="/publications#conferences" className="dropdown-link">
              Conferences
            </Link>
          </Dropdown>

          <Dropdown title="People">
            <Link to="/people#phd-students" className="dropdown-link">
              PhD Students
            </Link>
            <Link to="/people#alumni" className="dropdown-link">
              Alumni
            </Link>
            <Link to="/people#research-staff" className="dropdown-link">
              Research Staff
            </Link>
            <Link to="/people#interns" className="dropdown-link">
              Interns
            </Link>
          </Dropdown>

          <Dropdown title="Awards & Media">
            <Link to="/awards#awards-honors" className="dropdown-link">
              Awards & Honors
            </Link>
            <Link to="/awards#media-coverage" className="dropdown-link">
              Media Coverage
            </Link>
            <Link to="/awards#gallery-photos" className="dropdown-link">
              Gallery
            </Link>
          </Dropdown>

          <li>
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-expanded={open}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </>
  );
}

function Dropdown({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="has-dropdown" onMouseLeave={() => setOpen(false)}>
      <button className="nav-link" onClick={() => setOpen(!open)}>
        {title}{" "}
        <i className="fa-solid fa-chevron-down mobile-dropdown-icon"></i>
      </button>

      <ul className={`dropdown ${open ? "dropdown-open" : ""}`}>{children}</ul>
    </li>
  );
}
