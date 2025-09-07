import React from 'react'

const ProjectCard = () => {
  return (
    <div>
      <div className="w-full h-[800px] mb-4 flex gap-4">
          <div className="group w-1/2 h-full transition-all relative rounded-none hover:rounded-[50px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
              alt="image 1"
            />
            <div className="w-full h-full top-0 left-0 absolute bg-black/10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all">
              <h2 className="uppercase text-6xl font-[font1] border-2 pt-3 px-2 text-white border-white rounded-full">
                Voir le projet
              </h2>
            </div>
          </div>

           <div className="group w-1/2 h-full transition-all relative rounded-none hover:rounded-[50px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
              alt="image 1"
            />
            <div className="w-full h-full top-0 left-0 absolute bg-black/10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all">
              <h2 className="uppercase text-6xl font-[font1] border-2 pt-3 px-2 text-white border-white rounded-full">
                Voir le projet
              </h2>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default ProjectCard
