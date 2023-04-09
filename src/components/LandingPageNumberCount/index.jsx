import React from "react";

import { Button, Img, Text } from "components";

const LandingPageNumberCount = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="bg-white_A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
          <Img src="images/img_clock.svg" className="h-8" alt="clock" />
        </Button>
        <div className="flex flex-col gap-3.5 items-start justify-start w-full">
          <Text
            className="font-manrope text-gray_900 text-left tracking-[-0.92px] w-auto"
            as="h2"
            variant="h2"
          >
            {props?.number}
          </Text>
          <Text
            className="font-manrope font-semibold leading-[140.00%] text-bluegray_600 text-left tracking-[-0.40px]"
            variant="body1"
          >
            {props?.desc}
          </Text>
        </div>
      </div>
    </>
  );
};

LandingPageNumberCount.defaultProps = {
  number: "$15.4M",
  desc: (
    <>
      Owned from
      <br />
      Properties transactions
    </>
  ),
};

export default LandingPageNumberCount;
