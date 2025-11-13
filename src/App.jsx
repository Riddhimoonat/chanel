import Navbar from "./components/navbar/Navbar";
import VideoSection from "./components/VideoSection";
import Projects from "./components/section1/Projects";
import Footer from "./components/footer/Footer";
import TextPrize from "./components/text/TextPrize";

function App() {
  return (
    <div>
      <Navbar />
      <VideoSection />
      <Projects />
      <TextPrize bgImageUrl="https://images.unsplash.com/photo-1693834084392-fa61a52a81c0?auto=format&fit=crop&w=3000&q=100" />

      <Footer />
    </div>
  );
}

export default App;
