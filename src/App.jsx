import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import VideoSection from "./components/VideoSection";
import Projects from "./components/section1/Projects";
import RippleCursor from "./components/RippleCursor";

function App() {
  const [disableRipple, setDisableRipple] = useState(false);

  return (
    <div>
      {/* When hovering over navbar, disable ripple */}
      <div
        onMouseEnter={() => setDisableRipple(true)}
        onMouseLeave={() => setDisableRipple(false)}
      >
        <Navbar />
      </div>

      <VideoSection />
      <Projects />

      {!disableRipple && <RippleCursor color="#ffffff" />}
    </div>
  );
}

export default App;
