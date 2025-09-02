import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".loadingAnimation", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(".loadingAnimation", {
      y: "100%",
      stagger: {
        amount: -0.3,
      },
    });
  });

  return (
    <div>
      <div className="fixed h-screen w-full top-0 z-10">
        <div className="flex h-full w-full">
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
