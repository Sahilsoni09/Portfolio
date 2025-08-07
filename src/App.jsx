import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import StatsSection from "./StatsSection";
import Testimonial from "./Testimonial";

function App() {
  return (
    <div className=" bg-black w-full min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
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
