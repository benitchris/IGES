import React, { useState } from 'react';

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
      <section className="internal-hero section">
        <div className="container">
           <span className="section-subtitle">Insights & Updates</span>
           <h1 className="section-title">Latest <span className="text-primary">News</span></h1>
           <p className="section-desc">Stay informed about our latest projects, research, and community impact.</p>
        </div>
      </section>

      <section className="news-content section">
        <div className="container">
           <div className="hub-grid" style={{gridTemplateColumns:'3fr 1fr'}}>
              <div className="news-main">
                 <div className="news-grid">
                    {filteredPosts.map(post => (
                       <div key={post.id} className="premium-card">
                          <div className="news-header" style={{display:'flex', justifyContent:'space-between', marginBottom:'1rem', fontSize:'0.85rem'}}>
                             <span className="news-category" style={{color:'var(--energy-orange)', fontWeight:'700'}}>{post.category}</span>
                             <span className="news-date" style={{color:'var(--text-muted)'}}>{post.date}</span>
                          </div>
                          <h3 style={{marginBottom:'1rem'}}>{post.title}</h3>
                          <p style={{color:'var(--text-muted)', fontSize:'0.95rem', marginBottom:'1.5rem'}}>{post.summary}</p>
                          <button className="btn btn-outline btn-sm">Read More</button>
                       </div>
                    ))}
                 </div>
                 {filteredPosts.length === 0 && <p>No articles found in this category.</p>}
              </div>

              <aside className="news-sidebar">
                 <div className="sidebar-box premium-card mb-md">
                    <h4>Categories</h4>
                    <ul className="sidebar-links" style={{listStyle:'none', padding:0, marginTop:'1rem'}}>
                       {categories.map(cat => (
                          <li key={cat} style={{marginBottom:'0.5rem'}}>
                             <button 
                               onClick={() => setActiveCategory(cat)}
                               style={{
                                  background:'none', 
                                  border:'none', 
                                  color: activeCategory === cat ? 'var(--primary-green)' : 'var(--text-muted)',
                                  fontWeight: activeCategory === cat ? '700' : '400',
                                  cursor:'pointer',
                                  padding:0
                               }}
                             >
                                {cat}
                             </button>
                          </li>
                       ))}
                    </ul>
                 </div>

                 <div className="sidebar-box premium-card">
                    <h4>Newsletter</h4>
                    <p style={{fontSize:'0.9rem', color:'var(--text-muted)', marginTop:'1rem'}}>Subscribe for weekly updates.</p>
                    <form style={{marginTop:'1.5rem'}} onSubmit={e => e.preventDefault()}>
                       <input type="email" placeholder="Your Email" style={{width:'100%', padding:'0.8rem', borderRadius:'8px', border:'1px solid var(--border-color)', marginBottom:'1rem'}} />
                       <button className="btn btn-primary w-full" style={{width:'100%'}}>Subscribe</button>
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
