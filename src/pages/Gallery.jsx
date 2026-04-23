import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import './Gallery.css';

// Importing all 11 images
import officeImg from '../assets/images/MTSL-people-talking-on-office.webp';
import facilityImg from '../assets/images/buyala-facility.webp';
import dumpsitePeopleImg from '../assets/images/dumpisite-with-people-on-site.webp';
import dumpsite1Img from '../assets/images/dumpsite-1.webp';
import dumpsite2Img from '../assets/images/dumpsite-2.webp';
import dumpsiteGallery1Img from '../assets/images/dumpsite-gallery-1.webp';
import kccaVisit2Img from '../assets/images/kcca-people-visit-at-dumpsite-2.webp';
import kccaVisit1Img from '../assets/images/kcca-people-visit-at-dumpsite.webp';
import landingHeroImg from '../assets/images/landing-page-hero.webp';
import explanationImg from '../assets/images/on-dumbiste-visit-explanation.webp';
import actionImg from '../assets/images/waste-management-action.webp';

const Gallery = () => {
  const galleryItems = [
    { src: landingHeroImg, alt: "IGES Vision for Sustainable Energy", category: "Vision", size: "large" },
    { src: facilityImg, alt: "Waste Processing Facility at Buyala", category: "Infrastructure", size: "wide" },
    { src: officeImg, alt: "Strategic Planning at MTSL Office", category: "Operations", size: "tall" },
    { src: dumpsitePeopleImg, alt: "Field Team on Site Engagement", category: "Community", size: "medium" },
    { src: dumpsite1Img, alt: "Initial Waste Sorting Process", category: "Process", size: "medium" },
    { src: dumpsiteGallery1Img, alt: "Hub Operations Overview", category: "Operations", size: "wide" },
    { src: kccaVisit1Img, alt: "KCCA Institutional Visit", category: "Collaboration", size: "medium" },
    { src: kccaVisit2Img, alt: "Government Stakeholder Inspection", category: "Collaboration", size: "tall" },
    { src: explanationImg, alt: "Technical Briefing and Education", category: "Training", size: "wide" },
    { src: dumpsite2Img, alt: "Material Recovery and Flow", category: "Process", size: "medium" },
    { src: actionImg, alt: "Waste Management in Action", category: "Impact", size: "medium" }
  ];

  return (
    <div className="gallery-page">
      <PageHero 
        title="Project Gallery"
        subtitle="Visualizing our journey in transforming waste management across Uganda."
        backgroundImage={landingHeroImg}
        accentText="Display"
      />

      <section className="gallery-display section">
        <div className="container">
          <div className="gallery-grid-masonry">
            {galleryItems.map((item, index) => (
              <div key={index} className={`gallery-card reveal ${item.size}`}>
                <div className="gallery-card-inner">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="gallery-card-overlay">
                    <span className="card-category">{item.category}</span>
                    <h3 className="card-title">{item.alt}</h3>
                    <div className="card-action">
                      <span className="view-text">View Display</span>
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-cta section bg-dark">
        <div className="container text-center">
          <h2 className="section-title text-white">Join the Sustainable Revolution</h2>
          <p className="section-desc text-gray">Be part of our mission to transform the environmental landscape of Uganda.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Partner With Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
