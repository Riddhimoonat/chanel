import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextPrize = ({ bgImageUrl }) => {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  return (
    <section
      className="w-full h-screen flex items-center justify-center px-8"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center text-white max-w-2xl space-y-6">
        <h1 ref={addToRefs} className="text-5xl font-light tracking-wide">
          ELEVATE YOUR STYLE
        </h1>

        <p ref={addToRefs} className="text-lg leading-relaxed opacity-90">
          A touch of luxury. A world of elegance.  
          ZUDIO brings fashion that feels effortless and timeless.
        </p>

        <button
          ref={addToRefs}
          className="px-6 py-3 border border-white rounded-full tracking-wider hover:bg-white hover:text-black transition-all duration-300"
        >
          DISCOVER MORE
        </button>
      </div>
    </section>
  );
};

export default TextPrize;
