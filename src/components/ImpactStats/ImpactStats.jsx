import React, { useState, useEffect, useRef } from 'react';
import './ImpactStats.css';

const Counter = ({ target, label, index }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Extract number from target string (e.g., "10,000+" -> 10000)
  const targetNumber = parseInt(target.replace(/,/g, ''));
  const suffix = target.replace(/[0-9,]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = targetNumber / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <div className="stat-card reveal" style={{ animationDelay: `${index * 0.1}s` }} ref={countRef}>
      <div className="stat-number">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const ImpactStats = () => {
  const stats = [
    { target: "10,000+", label: "Tons of Waste Processed" },
    { target: "500+", label: "Waste Workers Supported" },
    { target: "3+", label: "Circular Systems" },
    { target: "3+", label: "SACCO Support" }
  ];

  return (
    <section className="impact-stats section bg-dark">
      <div className="container">
        <div className="text-center mb-lg reveal">
          <h2 className="section-title text-white">Our Global Impact</h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Counter key={index} index={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
