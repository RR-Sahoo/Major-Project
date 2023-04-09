import React from "react";

import { Img, Text } from "components";

const LandingPageBlogCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src={props?.blogCardImage}
          className="md:h-[350px] sm:h-auto h-full object-cover rounded-[10px] w-full"
          alt="image"
        />
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <Text
            className="font-bold font-manrope leading-[135.00%] md:max-w-full max-w-sm text-left text-white_A700 tracking-[-0.48px]"
            as="h5"
            variant="h5"
          >
            {props?.blogCardTitle}
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start w-96 md:w-full">
            <Text
              className="font-bold font-manrope text-deep_orange_400 text-left w-auto"
              variant="body3"
            >
              {props?.blogCardButtonText}
            </Text>
            <Img
              src={props?.blogCardButtonIcon}
              className="h-6 w-6"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageBlogCard.defaultProps = {
  blogCardImage: "images/img_image_350x384.png",
  blogCardTitle: "9 Easy-to-Ambitious DIY Projects to Improve Your Home",
  blogCardButtonText: "Read the Article",
  blogCardButtonIcon: "images/img_arrowright_deep_orange_400.svg",
};

export default LandingPageBlogCard;
