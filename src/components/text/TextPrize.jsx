import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextPrize = ({ bgImageUrl }) => {
  const heroRef = useRef(null);
  const textRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.from(textRefs.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-[85vh] flex flex-col items-center justify-center px-5 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* TEXT */}
      <div className="relative text-center text-white">
        <h1
          ref={addToRefs}
          className="text-6xl font-light tracking-widest mb-6 leading-tight"
        >
          ELEVATE YOUR STYLE
        </h1>

        <p
          ref={addToRefs}
          className="text-xl max-w-[650px] mx-auto font-light opacity-90 leading-relaxed"
        >
          A touch of luxury. A world of elegance.
          ZUDIO brings fashion that feels effortless and timeless.
        </p>

        <button
          ref={addToRefs}
          className="mt-10 px-12 py-3 text-lg font-medium border-none rounded-full
                     bg-black text-white hover:text-black hover:bg-white transition-all duration-300 tracking-wide"
        >
          DISCOVER MORE
        </button>
      </div>
    </div>
  );
};

export default TextPrize;
