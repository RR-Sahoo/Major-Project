import React from "react";
import { Text, Input, Img, SelectBox, Button } from "components";

const ListingHeader = (props) => {
  return (
    <div className="flex font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
      <div className="flex flex-col gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
        <Text
          className="text-gray_900 text-left tracking-[-0.72px] w-auto"
          as="h3"
          variant="h3"
        >
          Find Property
        </Text>
        <div className="flex flex-col md:flex-row gap-3 items-start justify-start w-full">
          <div className="w-full md:w-auto">
            <div className="bg-white_A700 border border-bluegray_100 border-solid flex h-[60px] items-start justify-start px-4 py-3.5 rounded-[10px] w-full">
              <Input
                wrapClassName="flex w-auto sm:w-full listing-search"
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
                onChange={props.handleSearchTermChange}
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingHeader;
