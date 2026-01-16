import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const words = [
    "Macroeconomic Reforms",
    "International Trade",
    "Intellectual Property Rights",
    "Labour Economics",
    "Infrastructure Economics",
    "Sustainable Development",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typing Logic
  useEffect(() => {
    // If finished typing the word
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000); // Wait 2s before deleting
      return () => clearTimeout(timeout);
    }

    // If finished deleting the word
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length); // Move to next word
      return;
    }

    // Typing speed (100ms) vs Deleting speed (50ms)
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <div
      className="expert-box fade-in-item is-visible"
      style={{ marginTop: "2.5rem", display: "inline-block" }}
    >
      <span className="expert-label">EXPERT IN:</span>
      <span className="typewriter">{words[index].substring(0, subIndex)}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default Typewriter;
