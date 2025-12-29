import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-root-primary text-text-primary overflow-hidden">
      <Header />
      <HeroBanner />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
