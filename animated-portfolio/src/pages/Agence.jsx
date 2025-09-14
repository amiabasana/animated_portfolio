import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_640X960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_640X980_2-640x960.jpg",
  ];


  useGSAP(() => {

  const getValues = () => {
    if (window.innerWidth >= 1024) {
      // Desktop
      return { start: "top 5%", end: "top -160%" };
    } else {
      // Mobile & Tablet
      return { start: "top 5%", end: "top -50%" };
    }
  };

  let { start, end } = getValues();


    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start,
        end,
        scrub: 0.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        onUpdate: (element) => {
          let imageIndex;
          if (element.progress < 1) {
            imageIndex = Math.floor(element.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="parent">
      <div id="page-1" className="py-1">
        <div
          ref={imageDivRef}
          className="absolute lg:h-[20vw] h-[28vw] lg:w-[15vw] w-[20vw] lg:rounded-3xl rounded-xl md:top-32 top-24 left-[30vw]
      overflow-hidden"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt="agence images"
          />
        </div>
        <div className="font-[font2] relative">
          <div className="lg:mt-[55.6vh] md:mt-[45.6vh] sm:mt-[33.6vh] mt-[24.6vh]">
            <h1 className="lg:text-[20vw] text-[18vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="md:pl-[40%] px-2 md:mt-4 sm:mt-3 mt-16">
            <p className="xl:text-5xl md:text-4xl sm:text-[22px] text-[20px] xl:leading-14 md:leading-12 sm:leading-8 leading-6 lg:indent-80 indent-20">Notre
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

      <div id="page-2" className="h-screen"></div>
    </div>
  );
};

export default Agence;
