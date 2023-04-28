import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/img_home.svg";

const LandingPageFooter = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 items-start justify-start w-full">
          <div className="flex md:flex-col h-24 flex-row md:gap-5 justify-start w-full">
            <div className="flex flex-col items-start justify-start w-[341px]">
              <div
                className="common-pointer flex flex-row gap-[11px] h-10 md:h-auto items-center justify-start w-[341px]"
                onClick={() => navigate("/")}
              >
                <Img src={Logo} className="h-10 w-10" alt="home_One" />
                <Text
                  className="font-markoone font-normal not-italic text-left text-orange_A700 w-auto"
                  variant="body1"
                >
                  Relasto
                </Text>
              </div>
              <div className="flex flex-col gap-7 h-[194px] md:h-auto items-start justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    info@mail.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-auto"
                  variant="body3"
                >
                  Company
                </Text>
                <div
                  className="flex flex-col gap-3.5 items-start justify-start w-full cursor-pointer"
                  onClick={() => navigate("/aboutus")}
                >
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    About us
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-auto"
                  variant="body3"
                >
                  Get help
                </Text>
                <div
                  className="flex flex-col gap-3.5 items-start justify-start w-full cursor-pointer"
                  onClick={() => navigate("/faq")}
                >
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    FAQ
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-auto"
                  variant="body3"
                >
                  Documentation
                </Text>
                <div
                  className="flex flex-col gap-3.5 items-start justify-start w-full cursor-pointer"
                  onClick={() => navigate("/blogpage")}
                >
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-auto"
                    variant="body4"
                  >
                    Blog
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
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <a target="_blank" href="https://www.facebook.com/">
                      <Img
                        src="/images/img_plus.svg"
                        className="h-[30px] w-[30px]"
                        alt="plus"
                      />
                    </a>
                  </div>
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <a target="_blank" href="https://twitter.com/i/flow/login">
                      <Img
                        src="/images/img_twitter.svg"
                        className="h-[30px] w-[30px]"
                        alt="twitter"
                      />
                    </a>
                  </div>
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/accounts/login/"
                    >
                      <Img
                        src="/images/img_instagram_orange_a700_30x30.svg"
                        className="h-[30px] w-[30px]"
                        alt="instagram"
                      />
                    </a>
                  </div>
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <a target="_blank" href="https://www.linkedin.com/login">
                      <Img
                        src="/images/img_linkedin.svg"
                        className="h-[30px] w-[30px]"
                        alt="linkedin"
                      />
                    </a>
                  </div>
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
