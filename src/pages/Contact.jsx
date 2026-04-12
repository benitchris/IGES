import React, { useState } from 'react';
import PageHero from '../components/PageHero/PageHero';
import './Contact.css';
import contactHero from '../assets/images/buyala-facility.webp';
const Contact = () => {
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     phone: '',
     message: ''
   });
   const [status, setStatus] = useState('idle'); // idle, sending, success, error

   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
     e.preventDefault();
     setStatus('sending');

     const botToken = '8744569472:AAGqLJZDVeKrgJJnrU4In-oZV3vdj7bbKhE';
     const chatId = '8445187460'; // Your verified Chat ID
     
     const text = `📬 New Message from IGES Website:\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📞 Phone: ${formData.phone}\n💬 Message: ${formData.message}`;

     try {
       const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ chat_id: chatId, text })
       });

       if (response.ok) {
         setStatus('success');
         setFormData({ name: '', email: '', phone: '', message: '' });
       } else {
         setStatus('error');
       }
     } catch (error) {
       setStatus('error');
     }
   };

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
                   <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-row">
                         <div className="form-group">
                            <label>Name</label>
                            <input 
                              type="text" 
                              name="name" 
                              placeholder="Your Name" 
                              value={formData.name}
                              onChange={handleChange}
                              required 
                            />
                         </div>
                         <div className="form-group">
                            <label>Email</label>
                            <input 
                              type="email" 
                              name="email" 
                              placeholder="Your Email" 
                              value={formData.email}
                              onChange={handleChange}
                              required 
                            />
                         </div>
                      </div>
                      <div className="form-group">
                         <label>Phone</label>
                         <input 
                           type="text" 
                           name="phone" 
                           placeholder="Your Phone Number" 
                           value={formData.phone}
                           onChange={handleChange}
                         />
                      </div>
                      <div className="form-group">
                         <label>Message</label>
                         <textarea 
                           name="message" 
                           placeholder="How can we help you?" 
                           rows="5" 
                           value={formData.message}
                           onChange={handleChange}
                           required
                         ></textarea>
                      </div>
                      <button 
                        className="btn btn-primary w-full" 
                        disabled={status === 'sending'}
                      >
                         {status === 'sending' ? 'Sending...' : 'Send Message'}
                      </button>

                      {status === 'success' && (
                        <p className="form-status success">Message sent successfully! We will get back to you soon.</p>
                      )}
                      {status === 'error' && (
                        <p className="form-status error">Something went wrong. Please try again or contact us via WhatsApp.</p>
                      )}
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
                      <a href="https://www.linkedin.com/in/intergrated-green-energy-solution-a23903402/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                      <a href="https://x.com/IGEsltd" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                      <a href="https://wa.me/256786670044" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                   </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
