import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import {
  Text,
  Input,
  Img,
  SelectBox,
  Button,
  GoogleMap,
  List,
} from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";

const ListingMapViewPage = () => {
  const landingPageCardPropList = [
    { image: "images/img_image_260x384.png" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_2.png" },
  ];

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center w-full">
          <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
              <Text
                className="text-gray_900 text-left tracking-[-0.72px] w-auto"
                as="h3"
                variant="h3"
              >
                Find Property
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-1 h-[60px] md:h-auto items-start justify-start px-4 py-3.5 rounded-[10px] w-full">
                    <Input
                      wrapClassName="flex w-auto sm:w-full"
                      className="font-semibold p-0 placeholder:text-gray_700 self-stretch text-gray_700 text-left text-lg w-full"
                      name="frame1000001565"
                      placeholder="Enter your address"
                      suffix={
                        <Img
                          src="images/img_search_gray_700.svg"
                          className="mt-auto mb-[3px] ml-3"
                          alt="search"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 items-start justify-start self-stretch w-auto sm:w-full">
                    <SelectBox
                      className="bg-white_A700 border border-bluegray_100 border-solid font-bold px-4 py-[18px] rounded-[10px] text-gray_700 text-left text-lg w-full"
                      placeholderClassName="text-gray_700"
                      name="dropdownlarge"
                      placeholder="Buy"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_700.svg"
                          className="h-6 w-6"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <SelectBox
                    className="bg-white_A700 border border-bluegray_100 border-solid md:flex-1 font-bold px-4 py-[18px] rounded-[10px] text-gray_700 text-left text-lg w-[18%] md:w-full"
                    placeholderClassName="text-gray_700"
                    name="price"
                    placeholder="$15000 - $18000"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_700.svg"
                        className="h-6 w-6"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <div className="flex flex-row gap-5 items-start justify-start w-[260px]">
                    <SelectBox
                      className="bg-white_A700 border border-bluegray_100 border-solid font-bold px-4 py-[18px] rounded-[10px] text-gray_700 text-left text-lg w-[47%] sm:w-full"
                      placeholderClassName="text-gray_700"
                      name="dropdownlarge_One"
                      placeholder="Bed - 3"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_700.svg"
                          className="h-6 w-6"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button
                      className="bg-white_A700 border border-bluegray_100 border-solid cursor-pointer flex items-center justify-center px-4 py-[18px] rounded-[10px] w-full"
                      rightIcon={
                        <Img
                          src="images/img_plus_gray_700.svg"
                          className="mb-px ml-3"
                          alt="plus"
                        />
                      }
                    >
                      <div className="font-bold text-gray_700 text-left text-lg">
                        More
                      </div>
                    </Button>
                  </div>
                  <Button
                    className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[124px] px-4 py-5 rounded-[10px] w-auto"
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
                <div className="flex flex-row flex-wrap gap-2.5 items-start justify-start max-w-[1200px] w-full">
                  <Button
                    className="border border-bluegray_101 border-solid cursor-pointer flex items-center justify-center px-3.5 py-[7px] rounded-[10px] w-[145px]"
                    rightIcon={
                      <Img
                        src="images/img_close.svg"
                        className="mt-0.5 mb-px ml-2"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray_700 text-left text-sm">
                      Bathrooms 2+
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[243px] px-3.5 py-[7px] rounded-[10px] w-auto"
                    rightIcon={
                      <Img
                        src="images/img_close.svg"
                        className="mt-px mb-[3px] ml-2"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray_700 text-left text-sm">
                      Square Feet 750 - 2000 sq. ft
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[151px] px-3.5 py-[7px] rounded-[10px] w-auto"
                    rightIcon={
                      <Img
                        src="images/img_close.svg"
                        className="mt-0.5 mb-px ml-2"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray_700 text-left text-sm">
                      Year Built 5 - 15
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[168px] px-3.5 py-[7px] rounded-[10px] w-auto"
                    rightIcon={
                      <Img
                        src="images/img_close.svg"
                        className="mt-px mb-[3px] ml-2"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray_900 text-left text-sm">
                      For Sale By Agent
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[174px] px-3.5 py-[7px] rounded-[10px] w-auto"
                    rightIcon={
                      <Img
                        src="images/img_close.svg"
                        className="mt-0.5 mb-px ml-2"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray_900 text-left text-sm">
                      New Construction
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1200px] mx-auto w-full">
              <div className="h-[428px] relative w-full">
                <GoogleMap
                  className="h-[428px] m-auto rounded-[10px] w-full"
                  showMarker={false}
                ></GoogleMap>
                <div
                  className="absolute bg-cover bg-no-repeat flex h-max inset-[0] items-end justify-center m-auto p-[67px] md:px-10 sm:px-5 w-[91%]"
                  style={{ backgroundImage: "url('images/img_group1.svg')" }}
                >
                  <div className="bg-white_A700 border border-gray_600 border-solid flex items-start justify-start mb-[15px] mt-6 px-4 py-6 rounded-lg w-[308px]">
                    <div className="flex flex-col gap-[21.66px] items-start justify-start w-[276px]">
                      <div className="flex flex-row gap-[9.63px] items-center justify-start w-full">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[19px] w-[19px]"
                          alt="eye"
                        />
                        <Text
                          className="flex-1 text-gray_900 text-left w-auto"
                          variant="body6"
                        >
                          2861 62nd Ave, Oakland, CA 94605
                        </Text>
                      </div>
                      <List
                        className="flex-col gap-[16.84px] grid items-start w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-[32.08px] items-center justify-between my-0 w-full">
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                            <Img
                              src="images/img_bookmark.svg"
                              className="h-4 w-4"
                              alt="bookmark"
                            />
                            <Text
                              className="flex-1 text-gray_700 text-left w-auto"
                              variant="body6"
                            >
                              3 Bed Room
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                            <Img
                              src="images/img_ticket.svg"
                              className="h-4 w-4"
                              alt="ticket"
                            />
                            <Text
                              className="text-gray_700 text-left w-auto"
                              variant="body6"
                            >
                              1 Bath
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[32.08px] items-center justify-between my-0 w-full">
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                            <Img
                              src="images/img_icon.svg"
                              className="h-4 w-4"
                              alt="icon"
                            />
                            <Text
                              className="flex-1 text-gray_700 text-left w-auto"
                              variant="body6"
                            >
                              1,032 sqft
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                            <Img
                              src="images/img_iocnmenu_16x16.svg"
                              className="h-4 w-4"
                              alt="iocnmenu"
                            />
                            <Text
                              className="text-gray_700 text-left w-auto"
                              variant="body6"
                            >
                              Family
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex items-center justify-start w-full">
                        <Text
                          className="text-gray_900 text-left tracking-[-0.39px] w-auto"
                          variant="body2"
                        >
                          $649,900
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-start w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {landingPageCardPropList.map((props, index) => (
                    <React.Fragment key={`LandingPageCard${index}`}>
                      <LandingPageCard
                        className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full"
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
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default ListingMapViewPage;
