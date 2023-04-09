import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Input, Img, Button, Line } from "components";
import LandingPageFooter from "components/LandingPageFooter";

const ContactPagePage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-11 items-center justify-start max-w-[1200px] mx-auto w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Text
                  className="text-center text-gray_900 tracking-[-1.08px] w-auto"
                  as="h1"
                  variant="h1"
                >
                  Get in touch
                </Text>
                <Text
                  className="font-normal leading-[180.00%] max-w-[1200px] md:max-w-full not-italic text-center text-gray_600"
                  variant="body3"
                >
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble.
                </Text>
              </div>
              <div className="bg-white_A700 border border-bluegray_100 border-solid flex md:flex-col flex-row gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Send a message
                    </Text>
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Input
                        wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                        className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                        type="text"
                        name="textfieldlarge"
                        placeholder="Full Name"
                        prefix={
                          <Img
                            src="images/img_user.svg"
                            className="mt-auto mb-px mr-3.5"
                            alt="user"
                          />
                        }
                      ></Input>
                      <Input
                        wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                        className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                        type="email"
                        name="textfieldlarge_One"
                        placeholder="Email Address"
                        prefix={
                          <Img
                            src="images/img_mail_gray_600_24x24.svg"
                            className="mt-auto mb-px mr-3.5"
                            alt="mail"
                          />
                        }
                      ></Input>
                      <Input
                        wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                        className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                        type="number"
                        name="textfieldlarge_Two"
                        placeholder="Phone Number"
                        prefix={
                          <Img
                            src="images/img_call.svg"
                            className="mt-auto mb-px mr-3.5"
                            alt="call"
                          />
                        }
                      ></Input>
                      <div className="bg-white_A700 border border-bluegray_100 border-solid flex h-[152px] md:h-auto items-start justify-start px-[19px] py-3.5 rounded-[10px] w-full">
                        <Text
                          className="font-semibold text-gray_600 text-left w-auto"
                          variant="body3"
                        >
                          Message
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gray_900 cursor-pointer font-semibold sm:px-5 px-6 py-5 rounded-[10px] text-base text-center text-white_A700 w-full">
                    Send Request
                  </Button>
                </div>
                <Line className="bg-bluegray_100 h-[534px] md:h-px md:w-full w-px" />
                <div className="flex flex-1 flex-col gap-10 items-start justify-center w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Office Address
                      </Text>
                      <Text
                        className="font-semibold leading-[180.00%] text-gray_600 text-left"
                        variant="body3"
                      >
                        <>
                          1421 San Pedro St, Los Angeles, <br />
                          CA 90015
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Img
                          src="images/img_call.svg"
                          className="h-6 w-6"
                          alt="call_One"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_600 text-left w-auto"
                          variant="body3"
                        >
                          (123) 456-7890
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Img
                          src="images/img_mail_gray_600_24x24.svg"
                          className="h-6 w-6"
                          alt="mail_One"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_600 text-left w-auto"
                          variant="body3"
                        >
                          info@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start w-full sm:w-full">
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
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default ContactPagePage;
