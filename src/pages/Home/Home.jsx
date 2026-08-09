import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import WorkSection from "../../components/WorkSection/WorkSection.jsx";
import AboutSection from "../../components/AboutSection/AboutSection.jsx";
import FooterCTA from "../../components/FooterCTA/FooterCTA.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
      </main>
      <FooterCTA />
    </>
  );
}
