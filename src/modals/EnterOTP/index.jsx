import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Button, Line } from "components";

const EnterOTPModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[34%]"
        overlayClassName="bg-gray_900_cc fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="sm:h-auto md:h-auto max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-start justify-start md:px-5 px-[30px] py-10 rounded-[10px] w-full">
            <div className="flex flex-col gap-8 items-center justify-center w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <Text
                        className="flex-1 text-gray_900 text-left tracking-[-0.72px] w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Enter OTP
                      </Text>
                      <Img
                        src="images/img_close_gray_900.svg"
                        className="common-pointer h-[30px] w-[30px]"
                        onClick={props.onRequestClose}
                        alt="close"
                      />
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body3"
                    >
                      Please check your mail, We sent an OTP code
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-full">
                    <Button className="border border-gray_600 border-solid cursor-pointer flex-1 font-bold sm:px-5 px-6 py-[21px] rounded-[10px] text-center text-gray_900 text-lg w-[60px]">
                      0
                    </Button>
                    <Button className="border border-gray_600 border-solid cursor-pointer flex-1 font-bold sm:px-5 px-6 py-[21px] rounded-[10px] text-center text-gray_900 text-lg w-[60px]">
                      0
                    </Button>
                    <Button className="border border-gray_600 border-solid cursor-pointer flex-1 font-bold sm:px-5 px-6 py-[21px] rounded-[10px] text-center text-gray_900 text-lg w-[60px]">
                      0
                    </Button>
                    <Button className="border border-gray_600 border-solid cursor-pointer flex-1 font-bold sm:px-5 px-6 py-[21px] rounded-[10px] text-center text-gray_900 text-lg w-[60px]">
                      0
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button className="bg-gray_900 cursor-pointer font-bold sm:px-5 px-6 py-5 rounded-[10px] text-center text-lg text-white_A700 w-full">
                  Confirm
                </Button>
                <Button className="bg-white_A700 border border-gray_600 border-solid cursor-pointer font-bold sm:px-5 px-6 py-5 rounded-[10px] text-center text-gray_900 text-lg w-full">
                  Request OTP Again
                </Button>
              </div>
              <Line className="bg-bluegray_100 h-px w-full" />
              <div className="flex flex-row gap-2 items-start justify-center w-full">
                <Text
                  className="font-semibold text-center text-gray_600 tracking-[-0.40px] w-auto"
                  variant="body1"
                >
                  Remember the Password?
                </Text>
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                  variant="body1"
                >
                  Log in
                </Text>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default EnterOTPModal;
