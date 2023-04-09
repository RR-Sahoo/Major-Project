import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Img, Text, Button } from "components";

const ErrorPage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[116px] items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        <div className="flex flex-col font-manrope gap-[30px] items-center justify-start md:px-5 self-stretch w-auto sm:w-full">
          <Img
            src="images/img_frame1000001686.svg"
            className="h-[480px] w-[464px]"
            alt="frame1000001686"
          />
          <div className="flex flex-col gap-6 items-center justify-start self-stretch w-auto">
            <Text
              className="text-center text-gray_900 tracking-[-0.56px] w-auto"
              as="h4"
              variant="h4"
            >
              Something wrong!
            </Text>
            <Button
              className="border border-gray_600 border-solid cursor-pointer flex items-center justify-center min-w-[157px] px-4 py-5 rounded-[10px] w-auto"
              rightIcon={
                <Img
                  src="images/img_arrowright_gray_900.svg"
                  className="mb-[5px] ml-2.5"
                  alt="arrow_right"
                />
              }
            >
              <div className="font-bold text-gray_900 text-left text-lg">
                Homepage
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
