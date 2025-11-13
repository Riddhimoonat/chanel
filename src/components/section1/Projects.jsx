import { useGSAP } from '@gsap/react'
import ProjectCard from "../project/ProjectCard";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {


const projects = [
  {
    image1:
      "https://i.pinimg.com/1200x/81/55/b7/8155b7f313b2f3a99702aae9243ec2ab.jpg",
    image2:
      "https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=1042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-[1vh]'>
      <div className=' pt-[20vh]'>
        <h2 className=' lg:text-[9.5vw] text-7xl uppercase'>ZUDIO</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[450px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Projects