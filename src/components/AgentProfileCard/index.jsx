import React from "react";
import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const AgentProfileCard = (props) => {
  const navigate = useNavigate();
  const reviewScore = parseFloat(props?.agentReview);

  // Calculate the number of filled and empty stars based on the review score
  const filledStars = Math.floor(reviewScore);
  const emptyStars = 5 - filledStars;

  const handleClick = () => {
    navigate(`/agentprofile/${props.agentId}`);
  };

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
                {[...Array(filledStars)].map((_, index) => (
                  <Img
                    key={index}
                    src="images/img_star.svg"
                    className="h-4 w-4"
                    alt={`star_${index}`}
                  />
                ))}
                {[...Array(emptyStars)].map((_, index) => (
                  <Img
                    key={index}
                    src="images/img_star_gray_600.svg"
                    className="h-4 w-4"
                    alt={`star_${index + filledStars}`}
                  />
                ))}
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
              onClick={handleClick}
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
  agentReview: "4.5",
  agentProfileViewButton: "View Profile",
  agentId: 0,
};

export default AgentProfileCard;
