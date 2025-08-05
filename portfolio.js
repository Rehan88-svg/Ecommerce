import React from "react";
import webImage from "../assets/webdev.jpg";
import appImage from "../assets/appdev.jpg";
import dataImage from "../assets/datascience.jpg";
import cloudImage from "../assets/cloud.jpg";

const Portfolio = [
  {
    icon: webImage,
    title: "Web Development",
    description: "We build responsive and scalable websites tailored to your business needs.",
    type: "modern",
  },
  {
    icon: appImage,
    title: "Mobile App Development",
    description: "Clean and intuitive UI/UX design for Android and iOS platforms.",
    type: "outlined",
  },
  {
    icon: dataImage,
    title: "Data Science",
    description: "Analyze and visualize data using Python, Excel, and ML tools.",
    type: "minimal",
  },
  {
    icon: cloudImage,
    title: "Cloud Services",
    description: "Secure and scalable cloud architecture & deployment support.",
    type: "modern",
  },
];

export default function PortfolioSection() {
  const cardStyles = {
    modern: {
      backgroundColor: "#fff",
      padding: "1.5rem",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      transition: "transform 0.3s",
    },
    outlined: {
      backgroundColor: "#fdfdfd",
      padding: "1.5rem",
      borderRadius: "10px",
      transition: "transform 0.3s",
    },
    minimal: {
      backgroundColor: "#fff",
      padding: "1.2rem",
      borderRadius: "8px",
      transition: "transform 0.3s",
    },
  };

  return (
    <div
      style={{
        padding: "4rem 2rem 2rem", // ⬅️ Added top padding
        fontFamily: "sans-serif",
        // backgroundColor: "#f4f6f8",
        marginTop: "80px", // ⬅️ This adds space below navbar
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "red",
          marginBottom: "1rem",
        }}
      >
        Portfolio
      </h1>
      <h3
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#333",
        }}
      >
        Some of Our Awesome Projects
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        {Portfolio.map((item, index) => (
          <div
            key={index}
            style={{
              ...cardStyles[item.type],
              textAlign: "center",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-7px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img
              src={item.icon}
              alt={item.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3 style={{ color: "#222", marginBottom: "0.5rem" }}>{item.title}</h3>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
