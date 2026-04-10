import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="internal-hero section">
        <div className="container">
           <span className="section-subtitle">Get in Touch</span>
           <h1 className="section-title">Contact <span className="text-primary">Us</span></h1>
           <p className="section-desc">Have questions about our technology or want to partner with us? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
           <div className="hub-grid">
              <div className="contact-form-container">
                 <div className="premium-card">
                    <h2 style={{marginBottom:'2rem'}}>Send us a Message</h2>
                    <form className="contact-form" onSubmit={e => e.preventDefault()}>
                       <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', marginBottom:'1.5rem'}}>
                          <div className="form-group">
                             <label style={{display:'block', marginBottom:'0.5rem', fontWeight:'600'}}>Name</label>
                             <input type="text" placeholder="Your Name" style={{width:'100%', padding:'0.8rem', borderRadius:'8px', border:'1px solid var(--border-color)'}} />
                          </div>
                          <div className="form-group">
                             <label style={{display:'block', marginBottom:'0.5rem', fontWeight:'600'}}>Email</label>
                             <input type="email" placeholder="Your Email" style={{width:'100%', padding:'0.8rem', borderRadius:'8px', border:'1px solid var(--border-color)'}} />
                          </div>
                       </div>
                       <div className="form-group" style={{marginBottom:'1.5rem'}}>
                          <label style={{display:'block', marginBottom:'0.5rem', fontWeight:'600'}}>Phone</label>
                          <input type="text" placeholder="Your Phone Number" style={{width:'100%', padding:'0.8rem', borderRadius:'8px', border:'1px solid var(--border-color)'}} />
                       </div>
                       <div className="form-group" style={{marginBottom:'2rem'}}>
                          <label style={{display:'block', marginBottom:'0.5rem', fontWeight:'600'}}>Message</label>
                          <textarea placeholder="How can we help you?" rows="5" style={{width:'100%', padding:'0.8rem', borderRadius:'8px', border:'1px solid var(--border-color)', fontFamily:'inherit'}}></textarea>
                       </div>
                       <button className="btn btn-primary w-full" style={{width:'100%'}}>Send Message</button>
                    </form>
                 </div>
              </div>

              <div className="contact-info-container">
                 <div className="info-block mb-md">
                    <h4 style={{color:'var(--primary-green)', marginBottom:'1rem'}}>Office Location</h4>
                    <p style={{color:'var(--text-muted)'}}>Buyala Recycling Hub, Mityana Road<br />Kampala, Uganda</p>
                 </div>
                 
                 <div className="info-block mb-md">
                    <h4 style={{color:'var(--primary-green)', marginBottom:'1rem'}}>Contact Details</h4>
                    <p style={{color:'var(--text-muted)', marginBottom:'0.5rem'}}><strong>Phone:</strong> +256 700 103-446</p>
                    <p style={{color:'var(--text-muted)'}}><strong>Email:</strong> whoorigpei@gmail.com</p>
                 </div>

                 <div className="info-block mb-md">
                    <h4 style={{color:'var(--primary-green)', marginBottom:'1rem'}}>Follow Us</h4>
                    <div className="footer-socials" style={{marginTop:'0.5rem'}}>
                       <a href="#"><i className="fab fa-facebook-f"></i></a>
                       <a href="#"><i className="fab fa-twitter"></i></a>
                       <a href="#"><i className="fab fa-instagram"></i></a>
                       <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                 </div>

                 <div className="map-placeholder" style={{width:'100%', height:'250px', background:'#eee', borderRadius:'20px', display:'flex', alignItems:'center', justifyContent:'center', marginTop:'2rem'}}>
                    <p style={{color:'#666', fontWeight:'500'}}>Interactive Map Placeholder</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
