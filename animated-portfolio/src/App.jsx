import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/navigation/Navbar";
import FullScreenNav from "./components/navigation/FullScreenNav";
import usePageTitle from "./hooks/usePageTitle";
import { useContext } from "react";
import { NavbarContext } from "./context/NavContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  usePageTitle();
  const {navOpen, setNavOpen} = useContext(NavbarContext);

  // function gsapAnimation() {
  //   const tl = gsap.timeline();
  //   tl.to(".fullscreennav", {
  //     display: "block",
  //   });

  //   tl.to(".loadingAnimation", {
  //     delay: 0.2,
  //     height: "100%",
  //     stagger: {
  //       amount: -0.3,
  //     },
  //   });

  //   tl.to(".link", {
  //     opacity: 1,
  //     rotateX: 0,
  //     stagger: {
  //       amount: 0.3,
  //     },
  //   });
  //   tl.to(".navlink", {
  //     opacity: 1,
  //   });
  // }

  // function gsapAnimationReverse() {
  //   const tl = gsap.timeline();
  //   tl.to(".link", {
  //     opacity: 0,
  //     rotateX: 90,
  //     stagger: {
  //       amount: 0.1,
  //     },
  //   });

  //   tl.to(".loadingAnimation", {
  //     height: 0,
  //     stagger: {
  //       amount: 0.1,
  //     },
  //   });

  //   tl.to(".navlink", {
  //     height: 0,
  //     stagger: {
  //       amount: 0.1,
  //     },
  //   });
  //   tl.to(".navlink", {
  //     opacity: 0,
  //   });
  //   tl.to(".fullscreennav", {
  //     display: "none",
  //   });
  // }

  // useGSAP(() => {
  //   if (navOpen) {
  //     gsapAnimation();
  //   } else {
  //     gsapAnimationReverse();
  //   }
  // }, [navOpen]);
  return (
    <div className="overflow-hidden">
      <Navbar />
      {/* <FullScreenNav /> */}
      { <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullnav" element={<FullScreenNav />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>}
    </div>
  );
}

export default App;
