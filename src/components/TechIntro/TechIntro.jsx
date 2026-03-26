import React from 'react';
import { Link } from 'react-router-dom';
import './TechIntro.css';

const TechIntro = () => {
  const steps = [
    {
      id: 1,
      title: "Waste Collection",
      desc: "Organic waste is gathered from the Buyala dumpsite.",
      icon: "♻️"
    },
    {
      id: 2,
      title: "HTT Reaction",
      desc: "Hydrothermal technology breaks down waste at molecular levels.",
      icon: "🔥"
    },
    {
      id: 3,
      title: "Sustainable Energy",
      desc: "Clean energy and valuable by-products are generated.",
      icon: "⚡"
    }
  ];

  return (
    <section className="tech-intro section" id="technology">
      <div className="container">
        <div className="text-center mb-lg">
          <span className="section-subtitle">Our Innovation</span>
          <h2 className="section-title">Hydrothermal Technology (HTT)</h2>
          <p className="section-desc">
            We use cutting-edge hydrothermal processes to convert organic waste into clean, renewable energy efficiently and safely.
          </p>
        </div>

        <div className="process-infographic">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="process-step">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="process-arrow">➜</div>}
            </React.Fragment>
          ))}
        </div>

        <div className="text-center mt-lg">
          <Link to="/technology" className="btn btn-primary">How It Works In Detail</Link>
        </div>
      </div>
    </section>
  );
};

export default TechIntro;
