import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies />

        <Experience />
        <Cta />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
