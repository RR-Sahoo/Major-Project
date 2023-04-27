import React from "react";
import { Img, Text, Button } from "components";
import CallIcon from "../../../assets/images/img_call_gray_900.svg";
import MailIcon from "../../../assets/images/img_mail_gray_900.svg";
import clockIcon from "../../../assets/images/img_clock_gray_600.svg";
import linkedinIcon from "../../../assets/images/img_linkedin_gray_600.svg";
import twitterIcon from "../../../assets/images/img_twitter_gray_600.svg";
import playIcon from "../../../assets/images/img_play.svg";
import signalIcon from "../../../assets/images/img_signal.svg";
import starIcon from "../../../assets/images/img_star.svg";

import profile from "../../../assets/images/img_rectangle5596.png";

const AgentProfileAbout = ({ agent }) => {
  return (
    <div className="flex font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
      <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-center justify-center max-w-[1200px] mx-auto p-[42px] md:px-5 rounded-[10px] w-full">
        <div className="flex items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-start justify-center w-full">
            <div className="flex flex-1 flex-col gap-[57px] items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start w-full">
                  <Img
                    src={profile}
                    className="h-[182px] md:h-auto object-cover rounded-[10px] w-[182px]"
                    alt="rectangle5616"
                  />
                  <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-full">
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[-0.48px] w-auto"
                      as="h5"
                      variant="h5"
                    >
                      {agent?.name}
                    </Text>
                    <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-evenly w-[31%]">
                        <Img
                          src={starIcon}
                          className="h-4 w-4"
                          alt="star_Five"
                        />
                        <Img
                          src={starIcon}
                          className="h-4 w-4"
                          alt="star_Six"
                        />
                        <Img
                          src={starIcon}
                          className="h-4 w-4"
                          alt="star_Seven"
                        />
                        <Img
                          src={starIcon}
                          className="h-4 w-4"
                          alt="star_Eight"
                        />
                        <Img
                          src={starIcon}
                          className="h-4 w-4"
                          alt="star_Nine"
                        />
                      </div>
                      <Text
                        className="flex-1 font-semibold text-gray_900 text-left w-auto"
                        variant="body4"
                      >
                        {agent?.review} review
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <Img src={CallIcon} className="h-6 w-6" alt="call_One" />
                      <Text
                        className="flex-1 font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        {agent?.phone}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <Img src={MailIcon} className="h-6 w-6" alt="mail_One" />
                      <Text
                        className="font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        {agent?.email}
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                  variant="body3"
                >
                  <>{agent?.description}</>
                </Text>
              </div>
              <Button className="bg-gray_900 cursor-pointer font-semibold min-w-[525px] sm:min-w-full py-[13px] rounded-[10px] text-base text-center text-white_A700 w-auto">
                Contact
              </Button>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                  variant="body1"
                >
                  Experiences
                </Text>
                <Text
                  className="font-semibold text-gray_600 text-left w-auto"
                  variant="body3"
                >
                  {agent?.experience} experience
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                  variant="body1"
                >
                  Property Types
                </Text>
                <Text
                  className="font-semibold text-gray_600 text-left w-auto"
                  variant="body3"
                >
                  {agent?.propertyTypes}
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                  variant="body1"
                >
                  Area
                </Text>
                <Text
                  className="font-semibold text-gray_900 text-left w-auto"
                  variant="body3"
                >
                  {agent?.propertyArea}
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                  variant="body1"
                >
                  Address
                </Text>
                <Text
                  className="font-semibold text-gray_600 text-left w-auto"
                  variant="body3"
                >
                  {agent?.address}
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                    variant="body1"
                  >
                    License No
                  </Text>
                  <Text
                    className="font-semibold text-gray_600 text-left w-auto"
                    variant="body3"
                  >
                    {agent?.licenseNo}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                    variant="body1"
                  >
                    Website
                  </Text>
                  <Text
                    className="common-pointer font-semibold text-gray_600 text-left underline w-auto"
                    variant="body3"
                  >
                    {agent?.website}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                  variant="body1"
                >
                  Social
                </Text>
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <Img
                    src={clockIcon}
                    className="h-[30px] w-[30px]"
                    alt="clock"
                  />
                  <Img
                    src={linkedinIcon}
                    className="h-[30px] w-[30px]"
                    alt="linkedin"
                  />
                  <Img
                    src={twitterIcon}
                    className="h-[30px] w-[30px]"
                    alt="twitter"
                  />
                  <Img
                    src={playIcon}
                    className="h-[30px] w-[30px]"
                    alt="play"
                  />
                  <Img
                    src={signalIcon}
                    className="h-[30px] w-[30px]"
                    alt="signal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfileAbout;
