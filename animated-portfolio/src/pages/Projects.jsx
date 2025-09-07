import React from "react";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
  const projects = [{
    image1: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    image2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
  }]
  return (
    <div className="p-4">
      <div className="pt-[40vh]">
        <h2 className="font-[font2] text-[9vw] uppercase">
          Projets<sup>16</sup>
        </h2>
      </div>
      <div className="-mt-10">
        {projects.map(<ProjectCard/>)}
      </div>
    </div>
  );
};

export default Projects;
