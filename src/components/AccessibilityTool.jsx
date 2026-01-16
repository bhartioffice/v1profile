import React, { useState } from "react";

const AccessibilityTool = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(18); // Default rem base

  const handleIncrease = () => {
    if (fontSize < 24) {
      const newSize = fontSize + 2;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}px`;
    }
    setIsOpen(false); // <--- Auto-close menu
  };

  const handleDecrease = () => {
    if (fontSize > 14) {
      const newSize = fontSize - 2;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}px`;
    }
    setIsOpen(false); // <--- Auto-close menu
  };

  const handleReset = () => {
    setFontSize(18);
    document.documentElement.style.fontSize = "18px";
    setIsOpen(false); // <--- Auto-close menu
  };

  return (
    <div className="access-wrapper">
      <button
        className={`access-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility Options"
      >
        <i className="fa-solid fa-universal-access"></i>
      </button>

      <div className={`access-menu ${isOpen ? "open" : ""}`} id="access-menu">
        <button
          className="tool-btn"
          onClick={handleIncrease}
          data-tooltip="Increase Text"
        >
          A+
        </button>
        <button
          className="tool-btn"
          onClick={handleDecrease}
          data-tooltip="Decrease Text"
        >
          A-
        </button>
        <button className="tool-btn" onClick={handleReset} data-tooltip="Reset">
          <i className="fa-solid fa-rotate-left"></i>
        </button>
      </div>
    </div>
  );
};

export default AccessibilityTool;
