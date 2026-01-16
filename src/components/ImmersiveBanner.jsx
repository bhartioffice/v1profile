import React from "react";

// Default to the specific image you asked for
const defaultBanner = "/Photos/gallery/iit%20patna.jpg";

const ImmersiveBanner = ({
  imagePath = defaultBanner,
  altText = "Banner Image",
}) => {
  return (
    <section
      className="immersive-banner"
      style={{
        position: "relative",
        width: "100%",
        height: "60vh",
        minHeight: "400px",
        // Use the passed prop OR the default IIT Patna image
        backgroundImage: `url('${imagePath}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed", // Parallax effect
        marginTop: "4rem",
        marginBottom: "4rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)", // Added subtle shadow for polish
      }}
      role="img"
      aria-label={altText}
    >
      {/* Dark overlay removed for pure Light Mode appearance */}
    </section>
  );
};

export default ImmersiveBanner;
