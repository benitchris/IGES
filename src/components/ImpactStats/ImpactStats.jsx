import React, { useState, useEffect, useRef } from 'react';
import './ImpactStats.css';

const Counter = ({ target, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(target);
    const stepTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
}

const ImpactStats = () => {
  const stats = [
    { label: "Tons of Waste Processed", target: "5000", suffix: "+", icon: "🗑️" },
    { label: "Community Members Supported", target: "1200", suffix: "+", icon: "👥" },
    { label: "Energy Produced (MWh)", target: "500", suffix: "+", icon: "⚡" },
    { label: "CO2 Emissions Reduced", target: "850", suffix: " Tons", icon: "🌍" }
  ];

  return (
    <section className="impact-stats section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <h2 className="stat-number">
                <Counter target={stat.target} duration={2000} suffix={stat.suffix} />
              </h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
