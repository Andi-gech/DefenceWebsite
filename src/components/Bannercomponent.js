import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Typewriter from "typewriter-effect";

function Bannercomponent({ banner, onImageLoad }) {
  useEffect(() => {
    const img = new Image();
    img.src = banner;

    img.onload = () => {
      onImageLoad(true);
    };

    return () => {
      img.onload = null;
    };
  }, [banner, onImageLoad]);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      className="Bannercomponent"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="Banner-darken">
        <div className="Wellcome-text">
          <p id="wellcome">Welcome to Ethiopian Defence University</p>
          <>
            <Typewriter
              id="types"
              options={{
                loop: true,
                delay: 190,
                deleteSpeed: 100,
              }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("እንኳን ወደ ኢትዮጵያ መከላከያ ዩኒቨርሲቲ በደህና መጡ!!")

                  .pauseFor(3000)
                  .deleteAll()
                  .typeString(" the Largest Learning Center In ethiopia")
                  .pauseFor(3000)
                  .deleteAll()

                  .start();
              }}
            />
          </>

          <button>Our Vision</button>
        </div>
      </div>
    </div>
  );
}

export default Bannercomponent;
