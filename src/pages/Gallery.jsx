import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import './Gallery.css';

// Base Imports
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

// New Imports
import afterMeetingImg from '../assets/images/aftermeeting.webp';
import afterMeetingJoyImg from '../assets/images/aftermeetingjoy.webp';
import anotherSaccoImg from '../assets/images/anothersaccopic.webp';
import farewellImg from '../assets/images/fairewellsatmeeting.webp';
import gabbageImg from '../assets/images/gabbage.webp';
import kaveraAgainImg from '../assets/images/kavera-again.webp';
import kaveraImg from '../assets/images/kavera.webp';
import meetingQuestionsImg from '../assets/images/meeting-questons.webp';
import meetingPic2Img from '../assets/images/meetingpic2.webp';
import meetingSigningsImg from '../assets/images/meetingsignings.webp';
import moreKaveraImg from '../assets/images/more-kavera.webp';
import moreMoreKaveraImg from '../assets/images/moreandmore-kavera.webp';
import plasticBottlesImg from '../assets/images/plastic-bottles.webp';
import plasticImg from '../assets/images/plastic.webp';
import saccoMeetingImg from '../assets/images/sacco-meeting.webp';
import saccoOfficeImg from '../assets/images/sacco-office.webp';
import trashImg from '../assets/images/trash.webp';

const Gallery = () => {
  const galleryItems = [
    { src: landingHeroImg, alt: "IGES Vision for Sustainable Energy", category: "Vision", size: "large" },
    { src: facilityImg, alt: "Waste Processing Facility at Buyala", category: "Infrastructure", size: "wide" },
    { src: officeImg, alt: "Strategic Planning at MTSL Office", category: "Operations", size: "tall" },
    
    // Community & Meetings
    { src: afterMeetingJoyImg, alt: "Celebration after successful stakeholder engagement", category: "Community", size: "medium" },
    { src: meetingSigningsImg, alt: "Formalizing partnerships for waste management", category: "Collaboration", size: "medium" },
    { src: saccoMeetingImg, alt: "IGES SACCO members meeting", category: "SACCO", size: "wide" },
    { src: farewellImg, alt: "Closing session of technical workshop", category: "Community", size: "medium" },
    
    // Site & Waste
    { src: gabbageImg, alt: "Managing organic waste collection", category: "Process", size: "medium" },
    { src: plasticImg, alt: "Sorted plastics ready for recycling", category: "Recycling", size: "tall" },
    { src: kaveraImg, alt: "Processing lightweight plastic materials", category: "Process", size: "wide" },
    { src: trashImg, alt: "Systematic waste sorting at the hub", category: "Operations", size: "medium" },
    
    // More Meetings
    { src: afterMeetingImg, alt: "Post-meeting strategic discussion", category: "Strategy", size: "medium" },
    { src: meetingQuestionsImg, alt: "Q&A session with local stakeholders", category: "Community", size: "tall" },
    { src: saccoOfficeImg, alt: "Operational hub for IGES SACCO", category: "SACCO", size: "medium" },
    { src: anotherSaccoImg, alt: "Financial empowerment through the SACCO", category: "SACCO", size: "medium" },
    
    // Field Work
    { src: dumpsitePeopleImg, alt: "Field Team on Site Engagement", category: "Community", size: "medium" },
    { src: dumpsite1Img, alt: "Initial Waste Sorting Process", category: "Process", size: "medium" },
    { src: dumpsiteGallery1Img, alt: "Hub Operations Overview", category: "Operations", size: "wide" },
    { src: kccaVisit1Img, alt: "KCCA Institutional Visit", category: "Collaboration", size: "medium" },
    { src: kccaVisit2Img, alt: "Government Stakeholder Inspection", category: "Collaboration", size: "tall" },
    
    // More Process
    { src: plasticBottlesImg, alt: "Collection of PET bottles for transformation", category: "Recycling", size: "medium" },
    { src: moreKaveraImg, alt: "Advanced sorting of flexible plastics", category: "Process", size: "wide" },
    { src: kaveraAgainImg, alt: "Secondary material recovery", category: "Process", size: "medium" },
    { src: moreMoreKaveraImg, alt: "High-volume waste processing", category: "Operations", size: "medium" },
    
    { src: meetingPic2Img, alt: "Stakeholder engagement and feedback", category: "Collaboration", size: "medium" },
    { src: explanationImg, alt: "Technical Briefing and Education", category: "Training", size: "wide" },
    { src: dumpsite2Img, alt: "Material Recovery and Flow", category: "Process", size: "medium" }
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
