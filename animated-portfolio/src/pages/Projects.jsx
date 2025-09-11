import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg', 
    },
    {
      image1:'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
    },
    {
      image1:'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
      image2:'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg'
    }];

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(function(){
      gsap.from('.hero',{
        height: '100px',
        stagger: {
          amount: 0.4,
        },
        scrollTrigger: {
            trigger: '.parent-project',
            start: 'top 100%',
            end: 'top -150%',
            scrub: true,
        }
      });
    })
  return (
    <div className="lg:p-4 p-2">
      <div className="pt-[40vh]">
        <h2 className="font-[font2] lg:text-[13vw] text-6xl uppercase">
          Projets
        </h2>
      </div>
      <div className="lg:-mt-20 parent-project">
        {projects.map(function (element, index){
          return <div key={index} className="hero w-full lg:h-[800px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2">
          <ProjectCard image1={element.image1} image2={element.image2}/>
          </div>
        })}
      </div>
    </div>
  );
};

export default Projects;
