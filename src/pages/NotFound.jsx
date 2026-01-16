import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      className="container"
      style={{ padding: "8rem 1rem", textAlign: "center" }}
    >
      <h1
        style={{
          fontSize: "6rem",
          color: "var(--color-primary)",
          marginBottom: "1rem",
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        Page Not Found
      </h2>
      <p
        style={{
          maxWidth: "500px",
          margin: "0 auto 2.5rem",
          color: "var(--color-text-muted)",
        }}
      >
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary">
        <i className="fa-solid fa-home"></i> Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
