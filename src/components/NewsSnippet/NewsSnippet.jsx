import React from 'react';
import { Link } from 'react-router-dom';
import './NewsSnippet.css';
import newsImg from '../../assets/images/on-dumbiste-visit-explanation.JPG';

const NewsSnippet = () => {
  const posts = [
    {
      id: 1,
      title: "Sustainable Waste Management Partnership with KCCA",
      date: "Oct 12, 2025",
      excerpt: "IGES hosted KCCA officials to discuss the future of waste-to-energy in Kampala...",
      category: "Press Release"
    },
    {
      id: 2,
      title: "Impact of HTT on Local Energy Production",
      date: "Sep 28, 2025",
      excerpt: "A deep dive into how hydrothermal technology is changing the energy landscape...",
      category: "Technology"
    },
    {
      id: 3,
      title: "Community Spotlight: The Buyala Waste Workers",
      date: "Sep 15, 2025",
      excerpt: "Meet the people behind the success of our recycling hub and SACCO...",
      category: "Community"
    }
  ];

  return (
    <section className="news-snippet section" id="news">
      <div className="container">
        <div className="text-center mb-lg">
          <span className="section-subtitle">Stay Informed</span>
          <h2 className="section-title">Latest News & <span className="text-primary">Press</span></h2>
        </div>

        <div className="news-grid">
          {posts.map(post => (
            <div className="news-card" key={post.id}>
              <div className="news-header">
                <span className="news-category">{post.category}</span>
                <span className="news-date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to="/news" className="read-more">Read Full Story ➜</Link>
            </div>
          ))}
        </div>

        <div className="news-featured mt-lg">
          <div className="featured-content">
            <div className="featured-badge">Featured</div>
            <h2>Major Milestone: Successful HTT Batch Completion</h2>
            <p>Our latest processing cycle has achieved record-breaking energy yields, paving the way for larger-scale operations at Buyala.</p>
            <Link to="/technology" className="btn btn-outline">Explore More</Link>
          </div>
          <div className="featured-image">
            <img src={newsImg} alt="Dumpsite visit explanation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSnippet;
