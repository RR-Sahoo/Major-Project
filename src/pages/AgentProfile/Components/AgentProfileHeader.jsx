import React from "react";
import { Img, Text, Button } from "components";
import ProfilePic from "../../../assets/images/img_rectangle5596.png";
import CallIcon from "../../../assets/images/img_call_gray_900.svg";
import MailIcon from "../../../assets/images/img_mail_gray_900.svg";
import starIconFill from "../../../assets/images/img_star.svg";
import starIconEmpty from "../../../assets/images/img_star_gray_600.svg";

const AgentProfileHeader = ({ agent }) => {
  const reviewScore = agent?.review;
  const filledStars = Math.floor(reviewScore);
  const emptyStars = 5 - filledStars;
  console.log(reviewScore);
  console.log("filledStars", filledStars);
  console.log("emptyStars", emptyStars);

  return (
    <div className="flex md:flex-col flex-row gap-[30px] items-end justify-start md:px-10 sm:px-5 px-[140px] w-full">
      <Img
        src={ProfilePic}
        className="h-[150px] md:h-auto object-cover rounded-[10px] w-[150px]"
        alt="rectangle5599"
      />
      <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start w-full">
        <div className="flex flex-1 md:flex-col flex-row gap-8 items-start justify-start w-full">
          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
            <Text
              className="font-bold text-gray_900 text-left tracking-[-0.48px] w-auto"
              as="h5"
              variant="h5"
            >
              {agent?.name}
            </Text>
            <div className="flex flex-row gap-3.5 items-center justify-start w-full">
              <div className="flex flex-row items-center justify-evenly w-1/4">
                {/* {[...Array(filledStars)].map((_, index) => (
                  <Img
                    key={index}
                    src={starIconFill}
                    className="h-4 w-4"
                    alt={`star_${index}`}
                  />
                ))}
                {[...Array(emptyStars)].map((_, index) => (
                  <Img
                    key={index}
                    src={starIconEmpty}
                    className="h-4 w-4"
                    alt={`star_${index + filledStars}`}
                  />
                ))} */}
              </div>
              <Text
                className="flex-1 font-semibold text-gray_900 text-left w-auto"
                variant="body4"
              >
                {agent?.review} review
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <Img src={CallIcon} className="h-6 w-6" alt="call" />
              <Text
                className="flex-1 font-semibold text-gray_900 text-left w-auto"
                variant="body3"
              >
                {agent?.phone}
              </Text>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <Img src={MailIcon} className="h-6 w-6" alt="mail" />
              <Text
                className="font-semibold text-gray_900 text-left w-auto"
                variant="body3"
              >
                {agent?.email}
              </Text>
            </div>
          </div>
        </div>
        <Button className="bg-gray_900 cursor-pointer font-semibold min-w-[112px] sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-white_A700 w-auto">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default AgentProfileHeader;
