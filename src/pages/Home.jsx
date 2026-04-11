import React from 'react';
import Hero from '../components/Hero/Hero';
import AboutSnapshot from '../components/AboutSnapshot/AboutSnapshot';
import PartnerLogos from '../components/PartnerLogos/PartnerLogos';
import TechPreview from '../components/TechPreview/TechPreview';
import HubHighlight from '../components/HubHighlight/HubHighlight';
import SaccoSection from '../components/SaccoSection/SaccoSection';
import ImpactStats from '../components/ImpactStats/ImpactStats';
import NewsSnippet from '../components/NewsSnippet/NewsSnippet';
import CallToAction from '../components/CallToAction/CallToAction';
import KeyFocusAreas from '../components/KeyFocusAreas/KeyFocusAreas';
import SolutionsSection from '../components/SolutionsSection/SolutionsSection';

const Home = () => {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <KeyFocusAreas />
      <AboutSnapshot />
      <SolutionsSection />
      <ImpactStats />
      <NewsSnippet />
      <CallToAction />
    </>
  );
};

export default Home;
