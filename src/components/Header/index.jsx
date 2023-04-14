import React from "react";

import { Img, Text, List, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Img src="images/img_home.svg" className="h-10 w-10" alt="home" />
              <Text
                className="font-markoone font-normal not-italic text-left text-orange_A700 w-auto"
                variant="body1"
              >
                Relasto
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full">
            <List
              className="sm:flex-col flex-row gap-[39px] grid grid-cols-3 w-auto"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="font-manrope font-semibold text-gray_900 text-left w-auto"
                  variant="body4"
                >
                  Home
                </Text>
                <Img
                  src="images/img_arrowdown_gray_600.svg"
                  className="h-4 w-4"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="font-manrope font-semibold text-gray_900 text-left w-auto"
                  variant="body4"
                >
                  Listing
                </Text>
                <Img
                  src="images/img_arrowdown_gray_600.svg"
                  className="h-4 w-4"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="font-manrope font-semibold text-gray_900 text-left w-auto"
                  variant="body4"
                >
                  Agents
                </Text>
                <Img
                  src="images/img_arrowdown_gray_600.svg"
                  className="h-4 w-4"
                  alt="arrowdown"
                />
              </div>
            </List>
            <Text
              className="font-manrope font-semibold text-center text-gray_900 w-auto"
              variant="body4"
            >
              Property{" "}
            </Text>
            <Text
              className="font-manrope font-semibold text-gray_900 text-left w-auto"
              variant="body4"
            >
              Blog
            </Text>
          </div>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[228px]">
            <Button className="bg-gray_900 cursor-pointer font-manrope font-semibold sm:px-5 px-6 py-[13px] rounded-[10px] text-base text-center text-white_A700 w-full">
              Log in
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
