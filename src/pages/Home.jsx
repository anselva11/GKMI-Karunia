import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Services from '../components/Services';
import Ministries from '../components/Ministries';
import Sermons from '../components/Sermons';
import Events from '../components/Events';
import Pastor from '../components/Pastor';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import PlanVisit from '../components/PlanVisit';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#0C1222]">
      {/* Sticky Top Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Welcome Section */}
        <Welcome />

        {/* 3. About Section & 3 Core Values */}
        <About />

        {/* 4. Weekly Service Times */}
        <Services />

        {/* 5. Ministries */}
        <Ministries />

        {/* 6. Inspiring Sermons */}
        <Sermons />

        {/* 7. Upcoming Gatherings & Events */}
        <Events />

        {/* 8. Meet Our Pastor & Leadership */}
        <Pastor />

        {/* 9. Stories of Faith / Testimonials Carousel */}
        <Testimonials />

        {/* 10. Photo Gallery & Lightbox */}
        <Gallery />

        {/* 11. Plan Your Visit */}
        <PlanVisit />

        {/* 12. Contact Form & Secretariat */}
        <Contact />

        {/* 13. Big Final CTA */}
        <CTA />
      </main>

      {/* 14. Footer */}
      <Footer />
    </div>
  );
}
