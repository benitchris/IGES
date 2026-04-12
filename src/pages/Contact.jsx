import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import './Contact.css';
import contactHero from '../assets/images/buyala-facility.webp';

const Contact = () => {
  return (
    <div className="contact-page">
      <PageHero 
        title="Contact Us"
        subtitle="Have questions about our technology or want to partner with us? We'd love to hear from you."
        backgroundImage={contactHero}
        accentText="Contact"
      />

      <section className="contact-content section">
        <div className="container">
            <div className="contact-form-section reveal active">
               <div className="premium-card form-card">
                  <h2>Send us a Message</h2>
                  <form className="contact-form" onSubmit={e => e.preventDefault()}>
                     <div className="form-row">
                        <div className="form-group">
                           <label>Name</label>
                           <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                           <label>Email</label>
                           <input type="email" placeholder="Your Email" />
                        </div>
                     </div>
                     <div className="form-group">
                        <label>Phone</label>
                        <input type="text" placeholder="Your Phone Number" />
                     </div>
                     <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="How can we help you?" rows="5"></textarea>
                     </div>
                     <button className="btn btn-primary w-full">Send Message</button>
                  </form>
               </div>
            </div>
         </div>
      </section>

      <section className="map-section reveal active">
         <div className="map-placeholder">
            {/* Background Map Placeholder */}
            <div className="map-bg-pattern"></div>
            <p className="map-status">Interactive Map Coming Soon</p>
         </div>
         
         <div className="container info-overlay-container">
            <div className="contact-info-overlay">
               <div className="info-block">
                  <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <h4>Office Location</h4>
                  <p>Buyala Recycling Hub, Mityana Road<br />Kampala, Uganda</p>
               </div>
               
               <div className="info-block">
                  <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
                  <h4>Contact Details</h4>
                  <p><strong>Phone:</strong> +256 786 670 044</p>
                  <p><strong>Email:</strong> intergratedgreens@gmail.com</p>
               </div>

               <div className="info-block">
                  <div className="info-icon"><i className="fas fa-share-alt"></i></div>
                  <h4>Follow Us</h4>
                  <div className="footer-socials">
                     <a href="https://www.linkedin.com/in/intergrated-green-energy-solution-a23903402/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                     <a href="https://x.com/IGEsltd" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                     <a href="#"><i className="fab fa-facebook-f"></i></a>
                     <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
