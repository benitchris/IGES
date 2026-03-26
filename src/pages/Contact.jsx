import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
       <section className="internal-hero section">
        <div className="container">
          <span className="section-subtitle">Get In Touch</span>
          <h1 className="section-title">Partner with <span className="text-primary">IGES</span></h1>
          <p className="section-desc">
            Ready to collaborate on sustainable energy solutions or join our efforts? Reach out today.
          </p>
        </div>
      </section>

      <section className="section">
         <div className="container">
            <div className="premium-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <form>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--energy-gold)' }}>Full Name</label>
                        <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'white' }} placeholder="John Doe" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--energy-gold)' }}>Email Address</label>
                        <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'white' }} placeholder="john@example.com" />
                    </div>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--energy-gold)' }}>Message</label>
                    <textarea style={{ width: '100%', height: '150px', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'white' }} placeholder="How can we help?"></textarea>
                  </div>
                  <button className="btn btn-primary" type="button" style={{ width: '100%' }}>Send Message</button>
                </form>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
