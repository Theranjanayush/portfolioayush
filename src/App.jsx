import { Navbar } from "@/layout/Navbar";
import { Hero } from "./section/Hero.jsx";
import { About } from "./section/About.jsx";
import { Projects } from "./section/Projects.jsx";
import { Experience } from "./section/Experience.jsx";
import { Contact } from "./section/Contact.jsx";
import { Footer } from "./layout/footer.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
