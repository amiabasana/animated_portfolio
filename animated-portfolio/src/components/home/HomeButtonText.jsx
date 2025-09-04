import React from "react";
import { Link } from "react-router-dom";

const HomeButtonText = () => {
  return (
    <div className="font-[font2] flex justify-center items-center gap-2 text-white">
      <div className="border-3 h-44 rounded-full border-white px-10 uppercase flex items-center hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6vw] mt-6" to="/projects">
          Projects
        </Link>
      </div>
      <div className="border-3 h-44 rounded-full border-white px-10 uppercase flex items-center hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6vw] mt-6" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeButtonText;
