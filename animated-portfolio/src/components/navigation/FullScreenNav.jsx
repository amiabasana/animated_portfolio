import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".loadingAnimation", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });

    tl.from(fullNavLinksRef.current, {
      opacity: 0,
    });

    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.3,
      },
    });
  });

  return (
    <div
      id="fullscreennav"
      className="h-screen w-full overflow-hidden absolute bg-black text-white"
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

      <div className="relative" ref={fullNavLinksRef}>
        <div className="flex w-full items-start justify-between p-5">
          <div>
            <div className="w-28">
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

          <div className="h-28 w-28 relative cursor-pointer">
            <div className="absolute bg-yellow-500 h-40 w-1 -rotate-45 origin-top"></div>
            <div className="absolute bg-yellow-500 h-40 w-1 rotate-45 origin-top right-0"></div>
          </div>
        </div>

        <div className="py-0">
          {/* Link 1*/}
          <div className="link origin-top border-t-1 border-white relative">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
              Projects
            </h1>
            <div className="moveLink flex absolute top-0 text-black bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour tout voir
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="nav image"
                />
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour tout voir
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt="nav image"
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour tout voir
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="nav image"
                />
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour tout voir
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt="nav image"
                />
              </div>
            </div>
          </div>

          {/* Link 2 */}
          <div className="link origin-top border-t-1 border-white relative">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
              Agence
            </h1>
            <div className="moveLink flex absolute top-0 text-black bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour tout savoir
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="nav image"
                />
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour tout savoir
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt="nav image"
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour tout savoir
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="nav image"
                />
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour tout savoir
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt="nav image"
                />
              </div>
            </div>
          </div>

          {/* Link 3 */}
          <div className="link origin-top border-t-1 border-white relative">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
              Contact
            </h1>
            <div className="moveLink flex absolute top-0 text-black bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour envoyer un fax
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="nav image"
                />
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour envoyer un fax
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt="nav image"
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour envoyer un fax
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="nav image"
                />
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Pour envoyer un fax
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt="nav image"
                />
              </div>
            </div>
          </div>

          {/* Link 4 */}
          <div className="link origin-top border-t-1 border-white relative">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
              Blogue
            </h1>
            <div className="moveLink flex absolute top-0 text-black bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Lire les articles
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="nav image"
                />
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Lire les articles
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt="nav image"
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Lire les articles
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="nav image"
                />
                <h2 className="whitespace-nowrap uppercase font-[font2] text-[8vw] text-center leading-[0.8] pt-6">
                  Lire les articles
                </h2>
                <img
                  className="h-32 rounded-full w-96 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt="nav image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
