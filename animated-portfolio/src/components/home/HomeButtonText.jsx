import React from "react";
import { Link } from "react-router-dom";

const HomeButtonText = () => {
  return (
    <div className="font-[font2] flex justify-center items-center gap-5 text-white">
      <p className="absolute lg:right-10 right-2 lg:bottom-36 bottom-20 font-[font1] lg:text-[0.9rem] text-sm lg:w-[20vw] w-64 lg:leading-6 leading-tight lg:indent-20 indent-12">K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className="lg:border-3 border-2 lg:h-24 rounded-full border-white lg:px-10 px-3 uppercase flex items-center hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6.6vw] lg:mt-6" to="/projects">
          Projets
        </Link>
      </div>
      <div className="lg:border-3 border-2 lg:h-24 rounded-full border-white lg:px-10 px-3 uppercase flex items-center hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6.6vw] lg:mt-6" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeButtonText;
