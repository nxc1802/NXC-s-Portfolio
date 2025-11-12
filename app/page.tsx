import Navbar from '@/components/Navbar';
import GalaxyBackground from '@/components/GalaxyBackground';
import Hero from '@/sections/Hero';
import MyJourney from '@/sections/MyJourney';
import TechStack from '@/sections/TechStack';
import Projects from '@/sections/Projects';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Galaxy Background */}
      <GalaxyBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <MyJourney />
          <TechStack />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </div>
  );
}
