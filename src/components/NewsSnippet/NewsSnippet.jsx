import React from 'react';
import { Link } from 'react-router-dom';
import './NewsSnippet.css';
import newsImg from '../../assets/images/on-dumbiste-visit-explanation.webp';

const NewsSnippet = () => {
  const posts = [
    {
      id: 1,
      title: "New Recycling Initiative Launch",
      date: "Mar 10, 2026",
      excerpt: "Expanding our sorting capacities to include more plastic and metallic recyclables...",
      category: "Initiative"
    },
    {
      id: 2,
      title: "Community Training Workshop",
      date: "Feb 22, 2026",
      excerpt: "Empowering local waste workers with modern safety and processing techniques...",
      category: "Workshop"
    },
    {
      id: 3,
      title: "HTT Research Partnership Update",
      date: "Jan 15, 2026",
      excerpt: "Deepening our collaboration with Makerere University on hydrothermal research...",
      category: "Research"
    }
  ];

  return (
    <section className="news-snippet section" id="news">
      <div className="container">
        <div className="text-center mb-lg">
          <span className="section-subtitle">Latest Updates</span>
          <h2 className="section-title">News & <span className="text-primary">Announcements</span></h2>
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
