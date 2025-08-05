import React from "react";
import developerImage from "../assets/developer.png";

export default function Home() {
  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeSlideLeft {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeZoom {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes haloPulse {
            0% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.3; }
            100% { transform: scale(1); opacity: 0.6; }
          }
        `}
      </style>

      <div style={styles.textSection}>
        <h2 style={styles.intro}>Hi, I'm</h2>
        <h1 style={styles.name}>Rehan</h1>
        <h3 style={styles.title}>Full Stack Developer</h3>
        <p style={styles.description}>
          I build modern, scalable web applications using the latest technologies.
          Passionate about creating user-friendly interfaces and robust backend systems.
        </p>
        <button style={styles.button}>Learn More</button>
      </div>

      <div style={styles.imageWrapper}>
        {/* Multiple halos */}
        <div style={{ ...styles.halo, ...styles.halo1 }}></div>
        <div style={{ ...styles.halo, ...styles.halo2 }}></div>
        <div style={{ ...styles.halo, ...styles.halo3 }}></div>

        <img
          src={developerImage}
          alt="Full Stack Developer"
          style={{ ...styles.image, animation: "fadeZoom 2s ease forwards" }}
        />
        <div style={styles.gradientBg}></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4rem 2rem",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    flexWrap: "wrap",
    position: "relative",
    overflow: "hidden",
  },
  textSection: {
    flex: "1",
    maxWidth: "600px",
    paddingLeft: "2rem",
    zIndex: 2,
    animation: "fadeSlideLeft 1s ease forwards",
  },
  intro: {
    fontSize: "1.5rem",
    color: "#555",
    marginBottom: "0.2rem",
  },
  name: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    margin: "0.5rem 0",
    color: "#2b2d42",
  },
  title: {
    fontSize: "1.5rem",
    color: "#3b82f6",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    color: "#444",
    lineHeight: "1.7",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.4s ease",
  },
  imageWrapper: {
    position: "relative",
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    zIndex: 1,
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "12px",
    zIndex: 3,
    opacity: 0,
  },
  gradientBg: {
    position: "absolute",
    top: "5%",
    left: "5%",
    width: "90%",
    height: "90%",
    zIndex: 0,
    borderRadius: "20px",
    background: "radial-gradient(circle at center, #93c5fd55, transparent)",
    filter: "blur(30px)",
  },
  halo: {
    position: "absolute",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "transparent",
    animation: "haloPulse 3s ease-in-out infinite",
    opacity: 0.5,
  },
  halo1: {
    width: "320px",
    height: "320px",
    borderWidth: "4px",
    borderColor: "rgba(197, 158, 29, 0.7)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    animationDelay: "0s",
    zIndex: 1,
    backgroundColor: "transparent",
  },
  halo2: {
    width: "260px",
    height: "260px",
    borderWidth: "3px",
    borderColor: "rgba(59, 130, 246, 0.6)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    animationDelay: "1s",
    zIndex: 1,
    backgroundColor: "transparent",
  },
  halo3: {
    width: "200px",
    height: "200px",
    borderWidth: "2px",
    borderColor: "rgba(99, 102, 241, 0.5)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    animationDelay: "2s",
    zIndex: 1,
    backgroundColor: "transparent",
  },
};
