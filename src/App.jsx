import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Stats from "./Stats";
import StatsSection from "./StatsSection";
import Testimonial from "./Testimonial";

function App() {
  return (
    <div className=" bg-black flex flex-1 flex-col min-h-screen overflow-x-hidden relative">
      <Nav />
      <Hero />
      <Stats />
      <Portfolio />
      <Skills />
      <About />
      {/* <Hero />
      <StatsSection />
      <Portfolio />
      <Skills />
      <Testimonial />
      <Footer /> */}
    </div>
  );
}
export default App;
