import React from "react";
import "./Button.css";

const Button = ({
  children,
  variant = "primary", // primary, secondary, outline, text
  href,
  onClick,
  className = "",
  download = false,
  target,
}) => {
  const btnClass = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={btnClass}
        download={download}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
