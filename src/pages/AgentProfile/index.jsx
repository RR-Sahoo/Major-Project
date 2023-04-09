import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Img, Text, Button, Line, List, SelectBox } from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";

const AgentProfilePage = () => {
  function handleNavigate() {
    window.location.href = "www.abc.com";
  }

  const landingPageCardPropList = [
    { image: "images/img_image_260x384.png" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
  ];

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-center mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex flex-col font-manrope md:px-5 relative w-full">
            <div className="flex flex-1 items-center justify-start mx-auto w-full">
              <Img
                src="images/img_coverimage.png"
                className="h-[250px] sm:h-auto object-cover w-full"
                alt="coverimage"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[58px] items-center justify-start mt-[-46px] mx-auto w-full z-[1]">
              <div className="flex md:flex-col flex-row gap-[30px] items-end justify-start md:px-10 sm:px-5 px-[140px] w-full">
                <Img
                  src="images/img_rectangle5599_150x150.png"
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
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-1/4">
                          <Img
                            src="images/img_star.svg"
                            className="h-4 w-4"
                            alt="star"
                          />
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
                          className="flex-1 font-semibold text-gray_900 text-left w-auto"
                          variant="body4"
                        >
                          4.5 review
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Img
                          src="images/img_call_gray_900.svg"
                          className="h-6 w-6"
                          alt="call"
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
                          alt="mail"
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
                  <Button className="bg-gray_900 cursor-pointer font-semibold min-w-[112px] sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-white_A700 w-auto">
                    Contact
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
                <div className="flex flex-col gap-12 items-center justify-center w-full">
                  <div className="gap-3 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                    <Button className="bg-gray_900 cursor-pointer flex-1 font-semibold sm:px-5 px-[30px] py-3.5 rounded-[10px] text-base text-center text-white_A700 w-full">
                      For rent
                    </Button>
                    <Button className="border border-gray_600 border-solid cursor-pointer flex-1 font-semibold sm:px-5 px-[30px] py-3.5 rounded-[10px] text-base text-center text-gray_900 w-full">
                      For sale
                    </Button>
                    <Button className="border border-gray_600 border-solid cursor-pointer flex-1 font-semibold sm:px-5 px-[30px] py-3.5 rounded-[10px] text-base text-center text-gray_900 w-full">
                      About
                    </Button>
                    <Button className="border border-gray_600 border-solid cursor-pointer flex-1 font-semibold sm:px-5 px-[30px] py-3.5 rounded-[10px] text-base text-center text-gray_900 w-full">
                      Review
                    </Button>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                      {landingPageCardPropList.map((props, index) => (
                        <React.Fragment key={`LandingPageCard${index}`}>
                          <LandingPageCard
                            className="flex flex-1 flex-col h-full items-start justify-start w-full"
                            p286162ndaveoaklOne="2861 62nd Ave, Oakland, CA 94605"
                            p3bedroom="3 Bed Room"
                            bathcounter="1 Bath"
                            sqftcounter="1,032 sqft"
                            p1bath="Family"
                            viewDetails="View Details"
                            price="$649,900"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                    <div className="flex flex-row gap-[5px] items-start justify-start self-stretch w-auto">
                      <Button className="border border-gray_700 border-solid cursor-pointer font-semibold h-12 px-[18px] py-4 rounded-[10px] text-base text-center text-gray_900 w-12">
                        1
                      </Button>
                      <Button className="border border-bluegray_102 border-solid cursor-pointer font-semibold h-12 px-[18px] py-4 rounded-[10px] text-base text-center text-gray_900 w-12">
                        2
                      </Button>
                      <Button className="border border-bluegray_102 border-solid cursor-pointer font-semibold h-12 px-[18px] py-4 rounded-[10px] text-base text-center text-gray_900 w-12">
                        3
                      </Button>
                      <Button className="border border-bluegray_102 border-solid cursor-pointer font-semibold h-12 px-[18px] py-4 rounded-[10px] text-base text-center text-gray_900 w-12">
                        4
                      </Button>
                      <Button className="border border-bluegray_102 border-solid cursor-pointer font-semibold h-12 px-[18px] py-4 rounded-[10px] text-base text-center text-gray_900 w-12">
                        5
                      </Button>
                    </div>
                    <Button
                      className="border border-bluegray_102 border-solid cursor-pointer flex items-center justify-center min-w-[134px] px-[18px] py-4 rounded-[10px] w-auto"
                      rightIcon={
                        <Img
                          src="images/img_arrowright_gray_900.svg"
                          className="mt-px mb-[5px] ml-1"
                          alt="arrow_right"
                        />
                      }
                    >
                      <div className="font-semibold text-base text-gray_900 text-left">
                        Next Page
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        images or videos, usually on your homepage.Adding
                        sliders to your site is no longer difficult. You don’t
                        have to know coding anymore. Just use a slider widget
                        and it will automatically insert the slider on your web
                        page.
                        <br />
                        One of the best ways to add beautiful sliders with
                        excellent responsiveness and advanced options.{" "}
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
                        onClick={handleNavigate}
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
        <div className="flex font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
          <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start max-w-[1200px] mx-auto md:px-5 py-[30px] rounded-[10px] w-full">
            <div className="flex items-start justify-start w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-between md:px-10 sm:px-5 px-[42px] w-full">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Clients Review
                    </Text>
                    <Button
                      className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[190px] px-4 py-5 rounded-[10px] w-auto"
                      rightIcon={
                        <Img
                          src="images/img_plus_white_a700.svg"
                          className="mt-px mb-[3px] ml-2.5"
                          alt="plus"
                        />
                      }
                    >
                      <div className="font-bold text-left text-lg text-white_A700">
                        Write a Reveiw
                      </div>
                    </Button>
                  </div>
                  <Line className="bg-bluegray_100 h-px w-full" />
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-center sm:px-5 px-[25px] w-full">
                  <List
                    className="flex-col gap-[25px] grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-1 items-start justify-start sm:px-5 px-[30px] py-[39px] rounded-[20px] w-full">
                      <div className="flex flex-col gap-10 items-start justify-start w-full">
                        <Text
                          className="font-semibold leading-[165.00%] max-w-[1090px] md:max-w-full text-gray_600 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                        <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-start md:pr-10 sm:pr-5 pr-[552px] w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="flex flex-row gap-2 items-center justify-between w-1/2">
                                <Img
                                  src="images/img_star_gray_900.svg"
                                  className="h-6 w-6"
                                  alt="star"
                                />
                                <Img
                                  src="images/img_star_gray_900.svg"
                                  className="h-6 w-6"
                                  alt="star_One"
                                />
                                <Img
                                  src="images/img_star_gray_900.svg"
                                  className="h-6 w-6"
                                  alt="star_Two"
                                />
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-6 w-6"
                                  alt="star_Three"
                                />
                              </div>
                              <Text
                                className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-auto"
                                variant="body1"
                              >
                                4.5 review
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-auto"
                              variant="body1"
                            >
                              02 June 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                            <Img
                              src="images/img_ellipse2695.png"
                              className="h-20 md:h-auto rounded-[50%] w-20"
                              alt="ellipse2695"
                            />
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-1 items-start justify-start sm:px-5 px-[30px] py-[39px] rounded-[20px] w-full">
                      <div className="flex flex-col gap-10 items-start justify-start w-full">
                        <Text
                          className="font-semibold leading-[165.00%] max-w-[1090px] md:max-w-full text-gray_600 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                        <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-start md:pr-10 sm:pr-5 pr-[552px] w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="flex flex-row gap-2 items-center justify-between w-1/2">
                                <Img
                                  src="images/img_star_gray_900.svg"
                                  className="h-6 w-6"
                                  alt="star"
                                />
                                <Img
                                  src="images/img_star_gray_900.svg"
                                  className="h-6 w-6"
                                  alt="star_One"
                                />
                                <Img
                                  src="images/img_star_gray_900.svg"
                                  className="h-6 w-6"
                                  alt="star_Two"
                                />
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-6 w-6"
                                  alt="star_Three"
                                />
                              </div>
                              <Text
                                className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-auto"
                                variant="body1"
                              >
                                4.5 review
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-auto"
                              variant="body1"
                            >
                              02 June 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                            <Img
                              src="images/img_ellipse2695.png"
                              className="h-20 md:h-auto rounded-[50%] w-20"
                              alt="ellipse2695"
                            />
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-1 items-start justify-start sm:px-5 px-[30px] py-[39px] rounded-[20px] w-full">
                      <div className="flex flex-col gap-10 items-start justify-start w-full">
                        <Text
                          className="font-semibold leading-[165.00%] max-w-[1090px] md:max-w-full text-gray_600 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                        <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-start md:pr-10 sm:pr-5 pr-[552px] w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="flex flex-row gap-2 items-center justify-between w-1/2">
                                <Img
                                  src="images/img_star_gray_900.svg"
                                  className="h-6 w-6"
                                  alt="star"
                                />
                                <Img
                                  src="images/img_star_gray_900.svg"
                                  className="h-6 w-6"
                                  alt="star_One"
                                />
                                <Img
                                  src="images/img_star_gray_900.svg"
                                  className="h-6 w-6"
                                  alt="star_Two"
                                />
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-6 w-6"
                                  alt="star_Three"
                                />
                              </div>
                              <Text
                                className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-auto"
                                variant="body1"
                              >
                                4.5 review
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-auto"
                              variant="body1"
                            >
                              02 June 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                            <Img
                              src="images/img_ellipse2695.png"
                              className="h-20 md:h-auto rounded-[50%] w-20"
                              alt="ellipse2695"
                            />
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <SelectBox
                    className="border border-gray_600 border-solid font-semibold px-[18px] py-4 rounded-[10px] text-base text-gray_900 text-left w-[12%] sm:w-full"
                    placeholderClassName="text-gray_900"
                    name="buttonmedium"
                    placeholder="See more"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_900.svg"
                        className="h-4 w-4"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default AgentProfilePage;
