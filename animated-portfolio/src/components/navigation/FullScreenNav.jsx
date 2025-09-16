import React, { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

const FullScreenNav = () => {
  const fullScreenRef = useRef(null);
  const {navOpen, setNavOpen} = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });

    tl.to(".loadingAnimation", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(".loadingAnimation", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(".navlink", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(() => {
    if (navOpen) {
      gsapAnimation();
    } else {
      gsapAnimationReverse();
    }
  }, [navOpen]);

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav h-screen w-full overflow-hidden absolute bg-black text-white z-50 hidden"
    >
      <div className="h-screen w-full fixed">
        <div className="flex h-full w-full">
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
          <div className="loadingAnimation h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div className="relative">
        <div className="navlink flex w-full items-start justify-between lg:p-5 p-2">
          <div>
            <div className="lg:w-28 w-24">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>

          <div
            className="lg:h-28 h-20 lg:w-28 w-20 relative cursor-pointer"
            onClick={() => setNavOpen(false)}
          >
            <div className="absolute hover:bg-[#D3FD50] bg-white lg:h-40 h-28 lg:w-1 w-0.5 -rotate-45 origin-top"></div>
            <div className="absolute hover:bg-[#D3FD50] bg-white lg:h-40 h-28 lg:w-1 w-0.5 rotate-45 origin-top right-0"></div>
          </div>
        </div>

        <div className="lg:py-36 py-52">
          {/* Link 1*/}
          <div className="link origin-top border-t-1 border-white relative">
            <h3 className="uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
              <Link to="/projects">
                Projets
                <div className="moveLink flex absolute top-0 text-black bg-[#D3FD50]">
                  <div className="moveX flex items-center">
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour tout voir
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt="nav image"
                    />
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour tout voir
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt="nav image"
                    />
                  </div>

                  <div className="moveX flex items-center">
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour tout voir
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt="nav image"
                    />
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour tout voir
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt="nav image"
                    />
                  </div>
                </div>
              </Link>
            </h3>
          </div>

          {/* Link 2 */}
          <div className="link origin-top border-t-1 border-white relative">
            <h3 className="uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
              <Link to="/agence">
                Agence
                <div className="moveLink flex absolute top-0 text-black bg-[#D3FD50]">
                  <div className="moveX flex items-center">
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour tout savoir
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt="nav image"
                    />
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour tout savoir
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt="nav image"
                    />
                  </div>

                  <div className="moveX flex items-center">
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour tout savoir
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt="nav image"
                    />
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour tout savoir
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt="nav image"
                    />
                  </div>
                </div>
              </Link>
            </h3>
          </div>

          {/* Link 3 */}
          <div className="link origin-top border-t-1 border-white relative">
            <h3 className="uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
              <Link to="/contact">
                Contact
                <div className="moveLink flex absolute top-0 text-black bg-[#D3FD50]">
                  <div className="moveX flex items-center">
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour envoyer un fax
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt="nav image"
                    />
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour envoyer un fax
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt="nav image"
                    />
                  </div>

                  <div className="moveX flex items-center">
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour envoyer un fax
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt="nav image"
                    />
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Pour envoyer un fax
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt="nav image"
                    />
                  </div>
                </div>
              </Link>
            </h3>
          </div>

          {/* Link 4 */}
          <div className="link origin-top border-t-1 border-b-1 border-white relative">
            <h3 className="uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
              <Link to="/blogue">
                Blogue
                <div className="moveLink flex absolute top-0 text-black bg-[#D3FD50]">
                  <div className="moveX flex items-center">
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Lire les articles
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt="nav image"
                    />
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Lire les articles
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt="nav image"
                    />
                  </div>

                  <div className="moveX flex items-center">
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Lire les articles
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt="nav image"
                    />
                    <span className="whitespace-nowrap uppercase font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 md:pt-4 pt-1">
                      Lire les articles
                    </span>
                    <img
                      className="lg:h-32 h-10 rounded-full lg:w-96 w-28 shrink-0 object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt="nav image"
                    />
                  </div>
                </div>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
