import { ReactLenis } from "lenis/react"; // <--- UPDATED IMPORT
import "lenis/dist/lenis.css"; // <--- OPTIONAL: Import default styles

function SmoothScroll({ children }) {
  const lenisOptions = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
