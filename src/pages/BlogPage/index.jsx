import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Input, Img, SelectBox, Button } from "components";
import BlogPageColumnactive from "components/BlogPageColumnactive";
import LandingPageFooter from "components/LandingPageFooter";

const BlogPagePage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start w-full">
          <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex flex-col font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1200px] mx-auto w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-auto"
                  as="h3"
                  variant="h3"
                >
                  Real Estate News & Blogs
                </Text>
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-1 flex-col items-center justify-start px-4 py-3.5 rounded-[10px] w-full">
                    <Input
                      wrapClassName="flex w-full"
                      className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                      name="frame1000001653"
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
                    className="bg-white_A700 border border-bluegray_100 border-solid flex-1 font-bold px-4 py-[18px] rounded-[10px] text-gray_600 text-left text-lg w-full"
                    placeholderClassName="text-gray_600"
                    name="dropdownlarge"
                    placeholder="Category"
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
                  <SelectBox
                    className="bg-white_A700 border border-bluegray_100 border-solid flex-1 font-bold px-4 py-[18px] rounded-[10px] text-gray_600 text-left text-lg w-full"
                    placeholderClassName="text-gray_600"
                    name="dropdownlarge_One"
                    placeholder="Popular"
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
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {new Array(9).fill({}).map((props, index) => (
                    <React.Fragment key={`BlogPageColumnactive${index}`}>
                      <BlogPageColumnactive
                        className="flex flex-1 flex-col items-start justify-start w-full"
                        business="Business"
                        p10delightfuldinOne="10 Delightful Dining Room Decor Trends for Spring"
                        july202022="July 20, 2022"
                        time="7 min read"
                        active="Continue Reading"
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

export default BlogPagePage;
