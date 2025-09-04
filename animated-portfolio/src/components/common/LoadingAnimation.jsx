import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const LoadingAnimation = (props) => {
  const currentPath = useLocation().pathname;

  const loadingAnimationRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(loadingAnimationRef.current, {
      display: "block",
    });

    tl.from(".loadingAnimation", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(".loadingAnimation", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(loadingAnimationRef.current, {
      display: "none",
    });

    tl.to(".loadingAnimation", {
      y: "0%",
    });

    tl.from(pageRef.current,{
      opacity: 0,
      // delay: 1.02,
      duration: 1,
      scale: 1.1
    })
  }, [currentPath]);

  return (
    <div>
      <div
        ref={loadingAnimationRef}
        className="fixed h-screen w-full top-0 z-10"
      >
        <div className="flex h-full w-full">
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>
      {props.children}
      </div>
    </div>
  );
};

export default LoadingAnimation;
