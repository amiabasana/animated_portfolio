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
    },
     {
      image1: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg'
    },
     {
      image1: 'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg'
    },
  ];

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
      <div className="pt-[45vh]">
        <h2 className="font-[font2] xl:text-[13vw] text-[11vw] uppercase leading-1">
          Projets
          <span className="lg:text-5xl md:text-4xl text-2xl font-[font2] align-text-top">12</span>
        </h2>
      </div>
      <div className="xl:mt-18 lg:mt-14 md:mt-10 sm:mt-3 mt-3 parent-project">
        {projects.map(function (element, index){
          return <div key={index} className="hero w-full lg:h-[300px] mb-2.5 flex sm:flex-row flex-col gap-2.5">
          <ProjectCard image1={element.image1} image2={element.image2}/>
          </div>
        })}
      </div>
    </div>
  );
};

export default Projects;
