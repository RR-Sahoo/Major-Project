import React from "react";
import { Img, Text, Button } from "components";

const AgentProfileAbout = () => {
  return (
    <div className="flex font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
      <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-center justify-center max-w-[1200px] mx-auto p-[42px] md:px-5 rounded-[10px] w-full">
        <div className="flex items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-start justify-center w-full">
            <div className="flex flex-1 flex-col gap-[57px] items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start w-full">
                  <Img
                    src="images/img_rectangle5599.png"
                    className="h-[182px] md:h-auto object-cover rounded-[10px] w-[182px]"
                    alt="rectangle5616"
                  />
                  <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-full">
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[-0.48px] w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Bruno Fernandes
                    </Text>
                    <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-evenly w-[31%]">
                        <Img
                          src="images/img_star.svg"
                          className="h-4 w-4"
                          alt="star_Five"
                        />
                        <Img
                          src="images/img_star.svg"
                          className="h-4 w-4"
                          alt="star_Six"
                        />
                        <Img
                          src="images/img_star.svg"
                          className="h-4 w-4"
                          alt="star_Seven"
                        />
                        <Img
                          src="images/img_star.svg"
                          className="h-4 w-4"
                          alt="star_Eight"
                        />
                        <Img
                          src="images/img_star_gray_600.svg"
                          className="h-4 w-4"
                          alt="star_Nine"
                        />
                      </div>
                      <Text
                        className="flex-1 font-semibold text-gray_900 text-left w-auto"
                        variant="body4"
                      >
                        4.5 review
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <Img
                        src="images/img_call_gray_900.svg"
                        className="h-6 w-6"
                        alt="call_One"
                      />
                      <Text
                        className="flex-1 font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        (123) 456-7890
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <Img
                        src="images/img_mail_gray_900.svg"
                        className="h-6 w-6"
                        alt="mail_One"
                      />
                      <Text
                        className="font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        bruno@relasto .com
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                  variant="body3"
                >
                  <>
                    A slider is great way to display a slideshow featuring
                    images or videos, usually on your homepage.Adding sliders to
                    your site is no longer difficult. You don’t have to know
                    coding anymore. Just use a slider widget and it will
                    automatically insert the slider on your web page.
                    <br />
                    One of the best ways to add beautiful sliders with excellent
                    responsiveness and advanced options.{" "}
                  </>
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
                  15+ years experience
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
                  Private House, Villa, Townhouse, Apartment
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
                  California, San Jose, Miami
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
                  59 Orchard, NY 5005, US
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
                    BF-0535
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
                    www.abc.com
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
                    src="images/img_clock_gray_600.svg"
                    className="h-[30px] w-[30px]"
                    alt="clock"
                  />
                  <Img
                    src="images/img_linkedin_gray_600.svg"
                    className="h-[30px] w-[30px]"
                    alt="linkedin"
                  />
                  <Img
                    src="images/img_twitter_gray_600.svg"
                    className="h-[30px] w-[30px]"
                    alt="twitter"
                  />
                  <Img
                    src="images/img_play.svg"
                    className="h-[30px] w-[30px]"
                    alt="play"
                  />
                  <Img
                    src="images/img_signal.svg"
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