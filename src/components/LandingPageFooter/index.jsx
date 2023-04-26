import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const LandingPageFooter = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-[43px] items-start justify-start w-[341px]">
              <div
                className="common-pointer flex flex-row gap-[11px] h-10 md:h-auto items-center justify-start w-[341px]"
                onClick={() => navigate("/")}
              >
                <Img
                  src="/images/img_home.svg"
                  className="h-10 w-10"
                  alt="home_One"
                />
                <Text
                  className="font-markoone font-normal not-italic text-left text-orange_A700 w-auto"
                  variant="body1"
                >
                  Relasto
                </Text>
              </div>
              <div className="flex flex-col gap-7 h-[194px] md:h-auto items-start justify-start w-full">
                <Text
                  className="font-manrope font-semibold leading-[160.00%] text-gray_900 text-left"
                  variant="body4"
                >
                  <>
                    59 Bervely Hill Ave, Brooklyn Town,
                    <br />
                    New York, NY 5630, CA, US
                  </>
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    +(123) 456-7890
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    info@mail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <Img
                      src="/images/img_plus.svg"
                      className="h-[30px] w-[30px]"
                      alt="plus"
                    />
                  </div>
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <Img
                      src="/images/img_twitter.svg"
                      className="h-[30px] w-[30px]"
                      alt="twitter"
                    />
                  </div>
                  <Img
                    src="/images/img_instagram_orange_a700_30x30.svg"
                    className="h-[30px] w-[30px]"
                    alt="instagram"
                  />
                  <Img
                    src="/images/img_linkedin.svg"
                    className="h-[30px] w-[30px]"
                    alt="linkedin"
                  />
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <Img
                      src="/images/img_clock_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="clock"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-auto"
                  variant="body3"
                >
                  Features
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Home v1
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Home v2
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    About
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Contact
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Search
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-auto"
                  variant="body3"
                >
                  Information
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Listing v1
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Listing v2
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Property Details
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Agent List
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Agent Profile
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-auto"
                  variant="body3"
                >
                  Documentation{" "}
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Blog
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    FAQ
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    License
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-auto"
                  variant="body3"
                >
                  Others
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Log in
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Enter OTP
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    New Password
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Reset Password
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Create Account
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-manrope font-semibold text-gray_900 text-left w-auto"
            variant="body4"
          >
            © 2022. All rights reserved.
          </Text>
        </div>
      </footer>
    </>
  );
};

LandingPageFooter.defaultProps = {};

export default LandingPageFooter;
