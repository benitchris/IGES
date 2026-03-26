import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutSnapshot from '../components/AboutSnapshot/AboutSnapshot'
import TechIntro from '../components/TechIntro/TechIntro'
import ImpactStats from '../components/ImpactStats/ImpactStats'
import RecyclingHubSnippet from '../components/RecyclingHubSnippet/RecyclingHubSnippet'
import SaccoSnippet from '../components/SaccoSnippet/SaccoSnippet'
import NewsSnippet from '../components/NewsSnippet/NewsSnippet'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <TechIntro />
      <ImpactStats />
      <RecyclingHubSnippet />
      <SaccoSnippet />
      <NewsSnippet />
    </>
  )
}

export default Home
