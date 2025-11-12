import React, { useEffect } from "react";
import "./section1.css";
import ProjectCard from "../project/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    image1:
      "https://i.pinimg.com/1200x/81/55/b7/8155b7f313b2f3a99702aae9243ec2ab.jpg",
    image2:
      "https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=1042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image1:
    "https://images.unsplash.com/photo-1646554399276-52261643a93d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
    "https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image1:
      "https://images.unsplash.com/photo-1677922336239-d6978d0d2af2?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://i.pinimg.com/736x/59/11/e2/5911e222332216856848baed1b48fad9.jpg",
  },
  {
    image1:
      "https://i.pinimg.com/736x/9c/1c/fd/9c1cfd6332350f7256d69a696e7ad9b4.jpg",
    image2:
      "https://i.pinimg.com/736x/61/dd/3c/61dd3c937273770b72010bb2cda90036.jpg",
  },
];

useEffect; 
const Section1 = () => {
    gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(".hero", {
      height: 0,
      stagger:{
        amount: 2,
      },
      duration: 0.6,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".lol",
        // markers:true,
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="lol">
      {images.map(function (elem, idx) {
        return (
          <div key={idx} className="hero w-full h-full mb-4 flex gap-4 mt-2">
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        );
      })}
    </div>
  );
};

export default Section1;  
