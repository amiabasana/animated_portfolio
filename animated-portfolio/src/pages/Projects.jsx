import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import useGSAP from '@gsap/react';
import gsap from "gsap";

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

    gsap.registerPlugin(scrollTrigger)

    useGSAP(function(){
      gsap.from('.hero',{
        height: 0,
        scrollTrigger: {
            trigger: '.parent-project'
        }
      });
    })
  return (
    <div className="p-4">
      <div className="pt-[40vh]">
        <h2 className="font-[font2] text-[9vw] uppercase">
          Projets<sup>16</sup>
        </h2>
      </div>
      <div className="-mt-10 parent-project">
        {projects.map(function (element, index){
          return <div key={index} className="hero w-full h-[800px] mb-4 flex gap-4">
          <ProjectCard image1={element.image1} image2={element.image2}/>
          </div>
        })}
      </div>
    </div>
  );
};

export default Projects;
