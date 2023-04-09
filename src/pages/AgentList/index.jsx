import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Input, Img, SelectBox, Button } from "components";
import LandingPageFooter from "components/LandingPageFooter";

const AgentListPage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-14 items-start justify-start w-full">
          <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
              <Text
                className="text-gray_900 text-left tracking-[-0.72px] w-auto"
                as="h3"
                variant="h3"
              >
                Some Nearby Good Agents
              </Text>
              <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-1 items-start justify-start px-4 py-3.5 rounded-[10px] w-full">
                  <Input
                    wrapClassName="flex w-full"
                    className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                    name="frame1000001612"
                    placeholder="Enter your address"
                    suffix={
                      <Img
                        src="images/img_search_gray_600.svg"
                        className="mt-auto mb-[3px] ml-3"
                        alt="search"
                      />
                    }
                  ></Input>
                </div>
                <SelectBox
                  className="bg-white_A700 border border-bluegray_100 border-solid md:flex-1 font-bold pl-5 pr-4 py-[18px] rounded-[10px] text-gray_600 text-left text-lg w-[12%] md:w-full"
                  placeholderClassName="text-gray_600"
                  name="dropdownlarge"
                  placeholder="Review"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_600_24x24.svg"
                      className="h-6 w-6"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Button
                  className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[128px] pl-5 pr-4 py-5 rounded-[10px] w-auto"
                  rightIcon={
                    <Img
                      src="images/img_search_white_a700.svg"
                      className="mt-px mb-[3px] ml-2.5"
                      alt="search"
                    />
                  }
                >
                  <div className="font-bold text-left text-lg text-white_A700">
                    Search
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-manrope md:gap-10 gap-[60px] items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex items-center justify-center max-w-[1200px] mx-auto w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5615.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5615"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5616.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5616"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5614.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5614"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5614_282x282.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5614"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5617.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5617"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5618.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5618"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5619.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5619"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5620.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5620"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5621.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5621"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5622.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5622"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5623.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5623"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5615_282x282.png"
                    className="h-[282px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
                    alt="rectangle5615"
                  />
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-gray_900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-between max-w-[1200px] mx-auto w-full">
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
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default AgentListPage;
