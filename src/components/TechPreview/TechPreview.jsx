import React from 'react';
import { Link } from 'react-router-dom';
import './TechPreview.css';

const TechPreview = () => {
  const steps = [
    { title: 'Waste Collection', desc: 'Sourcing organic waste from communities.' },
    { title: 'Processing', desc: 'Preparing materials for treatment.' },
    { title: 'Energy Extraction', desc: 'Converting waste into clean energy.' },
    { title: 'Sustainable Output', desc: 'Delivering environmental & economic value.' }
  ];

  return (
    <section className="tech-preview section bg-light">
      <div className="container">
        <div className="text-center mb-lg">
          <span className="section-subtitle">Our Technology Preview</span>
          <h2 className="section-title">Innovative Waste-to-Energy Technology</h2>
          <p className="max-w-md mx-auto">
            Our Hydrothermal Technology (HTT) transforms organic waste into valuable energy resources through an efficient, environmentally friendly process.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-lg">
          <Link to="/technology" className="btn btn-primary">Explore Our Technology</Link>
        </div>
      </div>
    </section>
  );
};

export default TechPreview;
