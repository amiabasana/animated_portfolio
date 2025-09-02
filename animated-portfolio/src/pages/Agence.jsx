import React, { useRef } from "react";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_640X960-640x960.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_640X980_2-640x960.jpg'
  ]

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
          trigger: imageDivRef.current,
          markers: true,
          start: 'top 20%',
          end: 'top -155%',
          scrub: true,
          pin: true,
          onUpdate: (element) => {
            let imageIndex;
            if(element.progress < 1){
            imageIndex = Math.round(element.progress * imageArray.length)
            }else{
              imageIndex = imageArray.length-1
            }
            imageRef.current.src = imageArray[imageIndex];
          }
      }
    })
  })



  return (
    <div>
      <div className="section-1">
        <div ref={imageDivRef}
          className="absolute h-[20vw] w-[15vw] rounded-2xl top-36 left-[30vw]
      overflow-hidden"
        >
          <img ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt="agence images"
          />
        </div>
        <div className="font-[font2] relative">
          <div className="mt-[56.6vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-4">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
