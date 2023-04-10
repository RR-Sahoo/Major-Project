import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const AgentProfileCard = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <Img
          src={props?.agentProfilePic}
          className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
          alt="rectangle5615"
        />
        <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="font-manrope font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
              variant="body1"
            >
              {props?.agentName}
            </Text>
            <div className="flex flex-row gap-3.5 items-center justify-start w-full">
              <div className="flex flex-row items-center justify-evenly w-2/5">
                <Img src="images/img_star.svg" className="h-4 w-4" alt="star" />
                <Img
                  src="images/img_star.svg"
                  className="h-4 w-4"
                  alt="star_One"
                />
                <Img
                  src="images/img_star.svg"
                  className="h-4 w-4"
                  alt="star_Two"
                />
                <Img
                  src="images/img_star.svg"
                  className="h-4 w-4"
                  alt="star_Three"
                />
                <Img
                  src="images/img_star_gray_600.svg"
                  className="h-4 w-4"
                  alt="star_Four"
                />
              </div>
              <Text
                className="flex-1 font-manrope font-semibold text-gray_900 text-left w-auto"
                variant="body4"
              >
                {props?.agentReview}
              </Text>
            </div>
            <Button
              className="common-pointer border border-bluegray_100 border-solid cursor-pointer font-manrope font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full"
              onClick={() => navigate("/agentprofile")}
            >
              {props?.agentProfileViewButton}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

AgentProfileCard.defaultProps = {
  agentProfilePic: "images/img_rectangle5615.png",
  agentName: "Bruno Fernandes",
  agentReview: "4.5 review",
  agentProfileViewButton: "View Profile",
};

export default AgentProfileCard;
