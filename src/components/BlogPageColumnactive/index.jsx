import React from "react";

import { Img, Button, Text } from "components";
import { useNavigate } from "react-router-dom";

const BlogPageColumnactive = (props) => {
  const Navigate = useNavigate();
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <Img
            src="images/img_rectangle5617_350x384.png"
            className="h-[350px] sm:h-auto object-cover rounded-lg w-full"
            alt="rectangle5617"
          />
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Button className="border border-bluegray_100 border-solid cursor-pointer font-manrope font-semibold min-w-[89px] px-3.5 py-2 rounded-[10px] text-center text-gray_900 text-sm w-auto">
              {props?.business}
            </Button>
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="font-bold font-manrope leading-[135.00%] md:max-w-full max-w-sm text-gray_900 text-left tracking-[-0.48px]"
                as="h5"
                variant="h5"
              >
                {props?.p10delightfuldinOne}
              </Text>
              <div className="flex flex-row gap-6 items-start justify-start md:pr-10 sm:pr-5 pr-[184px] w-full">
                <div className="flex flex-row gap-1.5 items-center justify-start pr-0.5 pt-0.5 w-[44%]">
                  <div className="bg-bluegray_100 h-[5px] my-1.5 rounded-sm w-[5px]"></div>
                  <Text
                    className="font-manrope text-gray_600 text-left w-auto"
                    variant="body7"
                  >
                    {props?.july202022}
                  </Text>
                </div>
                <div className="flex flex-row gap-1.5 items-center justify-center w-[44%]">
                  <div className="bg-bluegray_100 h-[5px] my-1.5 rounded-sm w-[5px]"></div>
                  <Text
                    className="font-manrope mr-[17px] text-gray_600 text-left w-auto"
                    variant="body7"
                  >
                    {props?.time}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  w-full">
          <div
            className="flex flex-row gap-2 cursor-pointer items-center justify-start w-auto"
            onClick={() => {
              Navigate(`/blogdetails`);
            }}
          >
            <Text
              className="font-bold font-manrope text-gray_600 text-left w-auto"
              variant="body3"
            >
              {props?.active}
            </Text>
            <Img
              src="images/img_arrowright_gray_600.svg"
              className="h-6 w-6"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

BlogPageColumnactive.defaultProps = {
  business: "Business",
  p10delightfuldinOne: "10 Delightful Dining Room Decor Trends for Spring",
  july202022: "July 20, 2022",
  time: "7 min read",
  active: "Continue Reading",
};

export default BlogPageColumnactive;
