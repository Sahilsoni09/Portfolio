import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Stats from "./Stats";

function App() {
  return (
    <div className="bg-black flex flex-col min-h-screen font-poppins scroll-smooth">
      <Nav />
      <Hero />
      <Stats />
      <Portfolio />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}
export default App;
