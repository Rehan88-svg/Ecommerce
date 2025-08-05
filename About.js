import React from "react";

export default function About() {
  return (
    <>
      <style>{`
        .about-container {
          padding: 4rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          background: linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .about-heading {
          font-size: 3.2rem;
          text-align: center;
          color: red;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .about-heading::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #1abc9c, #3b82f6);
          border-radius: 2px;
          animation: underlinePulse 2.5s infinite ease-in-out;
        }

        @keyframes underlinePulse {
          0%, 100% { opacity: 1; width: 80px; }
          50% { opacity: 0.5; width: 120px; }
        }

        .about-intro {
          font-size: 1.3rem;
          color: #555;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem auto;
          line-height: 1.8;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          padding: 0 1rem;
        }

        .card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 18px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.07);
          cursor: default;
          transition: transform 0.35s cubic-bezier(.25,.8,.25,1), 
                      box-shadow 0.35s cubic-bezier(.25,.8,.25,1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .card:hover {
          transform: translateY(-15px) rotateZ(1deg);
          box-shadow: 0 25px 40px rgba(0,0,0,0.15);
        }

        .card-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #1abc9c, #3b82f6);
          border-radius: 50%;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 15px rgba(26,188,156,0.3);
          color: white;
          font-size: 30px;
          user-select: none;
        }

        .card-title {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: #1abc9c;
          font-weight: 600;
        }

        .card-text {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
          user-select: text;
        }
      `}</style>

      <div className="about-container">
        <h1 className="about-heading">About Us</h1>
        <p className="about-intro">
          At our core, we deliver future-ready digital solutions. From web and mobile development to
          data and cloud technologies, we bring innovation and performance together.
        </p>

        <div className="services-grid">
          <div className="card">
            <div className="card-icon">🌐</div>
            <h2 className="card-title">Web Development</h2>
            <p className="card-text">
              Our websites are fast, responsive, and scalable. Using React, Next.js, and Node.js, we build
              solutions that work seamlessly across all devices and browsers.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">📱</div>
            <h2 className="card-title">App Development</h2>
            <p className="card-text">
              Cross-platform mobile apps built with React Native and Flutter. We focus on smooth UX and
              high performance for both Android and iOS devices.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">📊</div>
            <h2 className="card-title">Data Science</h2>
            <p className="card-text">
              From raw data to insight. We use Python, Pandas, and ML models to help you make smart,
              data-backed decisions with confidence.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">☁️</div>
            <h2 className="card-title">Cloud Services</h2>
            <p className="card-text">
              Scale effortlessly with AWS, Azure, and GCP. We offer DevOps, CI/CD, and secure cloud
              infrastructure design that’s built to last.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
