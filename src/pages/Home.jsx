import React from 'react';
import Hero from '../components/Hero/Hero';
import PartnerLogos from '../components/PartnerLogos/PartnerLogos';
import KeyFocusAreas from '../components/KeyFocusAreas/KeyFocusAreas';
import AboutSnapshot from '../components/AboutSnapshot/AboutSnapshot';
import SolutionsSection from '../components/SolutionsSection/SolutionsSection';
import ImpactStats from '../components/ImpactStats/ImpactStats';
import CallToAction from '../components/CallToAction/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <KeyFocusAreas />
      <AboutSnapshot />
      <SolutionsSection />
      <ImpactStats />
      <CallToAction />
    </>
  );
};

export default Home;
