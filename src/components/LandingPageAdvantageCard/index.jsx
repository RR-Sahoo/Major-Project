import React from "react";

import { Img, Text } from "components";

const LandingPageAdvantageCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-5 items-start justify-start w-full">
          <Img
            src={props?.cardImage}
            className="h-[30px] w-[30px]"
            alt="refresh"
          />
          <Text
            className="font-manrope leading-[135.00%] max-w-[222px] md:max-w-full text-gray_900 text-left tracking-[-0.56px]"
            as="h4"
            variant="h4"
          >
            {props?.cardText}
          </Text>
        </div>
      </div>
    </>
  );
};

LandingPageAdvantageCard.defaultProps = {
  cardImage: "images/img_refresh.svg",
  cardText: "Search your location",
};

export default LandingPageAdvantageCard;
