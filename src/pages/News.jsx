import React, { useState } from 'react';
import PageHero from '../components/PageHero/PageHero';
import './News.css';
import newsHero from '../assets/images/buyala-facility.webp';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Research', 'Community', 'Waste Management Tips', 'Press Releases'];

  const posts = [
    {
      id: 1,
      title: "New Recycling Initiative Launch",
      date: "Mar 10, 2026",
      category: "Press Releases",
      summary: "Expanding our sorting capacities to include more plastic and metallic recyclables at the Buyala hub."
    },
    {
      id: 2,
      title: "The Science of HTT",
      date: "Feb 28, 2026",
      category: "Research",
      summary: "How hydrothermal technology specifically addresses high-moisture organic waste efficiently."
    },
    {
      id: 3,
      title: "Waste Sorting 101",
      date: "Feb 15, 2026",
      category: "Waste Management Tips",
      summary: "Three simple steps every household can take to improve local waste management efficiency."
    },
    {
      id: 4,
      title: "Community Training Workshop",
      date: "Feb 10, 2026",
      category: "Community",
      summary: "A successful week of safety and technical training for 50 new waste workers at our hub."
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <div className="news-page">
      <PageHero 
        title="Latest News"
        subtitle="Stay informed about our latest projects, research, and community impact."
        backgroundImage={newsHero}
        accentText="News"
      />

      <section className="news-content section bg-light">
        <div className="container">
           <div className="news-layout-grid">
              <div className="news-main">
                 <div className="news-grid">
                    {filteredPosts.map(post => (
                        <div key={post.id} className="premium-card reveal active">
                           <div className="news-item-header">
                              <span className="news-category">{post.category}</span>
                              <span className="news-date">{post.date}</span>
                           </div>
                           <h3 className="news-item-title">{post.title}</h3>
                           <p className="news-item-summary">{post.summary}</p>
                           <button className="btn btn-outline btn-sm">Read More</button>
                        </div>
                    ))}
                 </div>
                 {filteredPosts.length === 0 && <p>No articles found in this category.</p>}
              </div>

              <aside className="news-sidebar">
                  <div className="sidebar-box premium-card mb-md reveal active">
                     <h4>Categories</h4>
                     <ul className="sidebar-links">
                        {categories.map(cat => (
                           <li key={cat}>
                              <button 
                                onClick={() => setActiveCategory(cat)}
                                className={activeCategory === cat ? 'active' : ''}
                              >
                                 {cat}
                              </button>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="sidebar-box premium-card reveal active">
                     <h4>Newsletter</h4>
                     <p className="newsletter-text">Subscribe for weekly updates.</p>
                     <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                        <input type="email" placeholder="Your Email" />
                        <button className="btn btn-primary w-full">Subscribe</button>
                     </form>
                  </div>
              </aside>
           </div>
        </div>
      </section>
    </div>
  );
};

export default News;
