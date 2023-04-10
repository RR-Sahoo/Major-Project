import React, { useState, useRef, useEffect } from "react";
import { Slider, Img, Text } from "components";

const LandingPageCarousel = () => {
  const [sliderState, setsliderState] = useState(0);
  const sliderRef = useRef(null);

  return (
    <div className="flex flex-col font-manrope gap-6 items-start justify-start w-full">
      <div className="flex items-center justify-center md:px-10 sm:px-5 px-[215px] w-full">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 1 },
          }}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          ref={sliderRef}
          draggable={true}
          className="max-w-[1010px] mx-auto w-full"
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start mx-2.5">
                <Img
                  src="images/img_rectangle5591.png"
                  className="flex-1 md:flex-none h-[344px] sm:h-auto object-cover rounded-lg w-full"
                  alt="rectangle5591"
                />
                <div className="flex flex-1 items-start justify-start w-full">
                  <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[73px] items-center justify-start w-full">
                      <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                        <Text
                          className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                          as="h4"
                          variant="h4"
                        >
                          Taylor Wilson
                        </Text>
                        <Text
                          className="font-semibold text-gray_900 text-left w-auto"
                          variant="body3"
                        >
                          Product Manager - Static Mania
                        </Text>
                      </div>
                      <Img
                        src="images/img_shape.svg"
                        className="h-[51px] max-h-[51px] w-auto sm:w-auto"
                        alt="shape"
                      />
                    </div>
                    <Text
                      className="font-semibold leading-[165.00%] max-w-[455px] md:max-w-full text-gray_700 text-left"
                      as="h5"
                      variant="h5"
                    >
                      Eget eu massa et consectetur. Mauris donec. Leo a, id sed
                      duis proin sodales. Turpis viverra diam porttitor mattis
                      morbi ac amet. Euismod commodo. We get you customer
                      relationships that last.{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
    </div>
  );
};

export default LandingPageCarousel;
