import React from "react";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description: "We build responsive and scalable websites tailored to your business needs.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description: "Clean and intuitive UI/UX design for Android and iOS platforms.",
  },
  {
    icon: "🎯",
    title: "Data Science",
    description: "Learn how to collect, analyze, and visualize data to uncover patterns and make smart decisions using tools like Python, Excel, and machine learning.",

  },
  {
    icon: "☁️",
    title: "Cloud Services",
    description: "Secure and scalable cloud architecture & deployment support.",
  },
 
];

export default function Services() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
              <h1 style={{ textAlign: "center", marginBottom: "5rem",  color: "red", position:"relative", top:"60px"} }>Services</h1>

      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>We Provide Best Services</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{service.icon}</div>
            <h3 style={{ marginBottom: "0.5rem", color: "#333" }}>{service.title}</h3>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
