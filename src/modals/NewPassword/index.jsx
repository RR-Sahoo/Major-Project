import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, Button, Line } from "components";

const NewPasswordModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[34%]"
        overlayClassName="bg-gray_900_cc fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="sm:h-auto md:h-auto max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start md:px-5 px-[30px] py-10 rounded-[10px] w-full">
            <div className="flex flex-col gap-8 items-center justify-center w-full">
              <div className="flex items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <Text
                        className="flex-1 text-gray_900 text-left tracking-[-0.72px] w-auto"
                        as="h3"
                        variant="h3"
                      >
                        New Password
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
                      Enter your new password
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-full">
                    <Input
                      wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                      className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                      type="password"
                      name="textfieldlarge"
                      placeholder="Password"
                      prefix={
                        <Img
                          src="images/img_user_gray_600.svg"
                          className="mt-auto mb-px mr-3.5"
                          alt="user"
                        />
                      }
                      suffix={
                        <Img
                          src="images/img_airplane.svg"
                          className="mt-auto mb-px ml-[35px]"
                          alt="airplane"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="flex items-start justify-start w-full">
                    <Input
                      wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                      className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                      type="password"
                      name="textfieldlarge_One"
                      placeholder="Re-New Password"
                      prefix={
                        <Img
                          src="images/img_user_gray_600.svg"
                          className="mt-auto mb-px mr-3.5"
                          alt="user"
                        />
                      }
                      suffix={
                        <Img
                          src="images/img_airplane.svg"
                          className="mt-auto mb-px ml-[35px]"
                          alt="airplane"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-start w-full">
                <Button className="bg-gray_900 cursor-pointer font-bold sm:px-5 px-6 py-5 rounded-[10px] text-center text-lg text-white_A700 w-full">
                  Update Password
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

export default NewPasswordModal;
