import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, CheckBox, Button, Line } from "components";

const CreateAccountModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[48%]"
        overlayClassName="bg-gray_900_cc fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="sm:h-auto md:h-auto max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-start justify-start md:px-5 px-[30px] py-10 rounded-[10px] w-full">
            <div className="flex flex-col gap-8 items-center justify-center w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Text
                      className="flex-1 text-gray_900 text-left tracking-[-0.72px] w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Create Account
                    </Text>
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="common-pointer h-[30px] w-[30px]"
                      onClick={props.onRequestClose}
                      alt="close"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                      <Input
                        wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                        className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                        type="email"
                        name="textfieldlarge"
                        placeholder="user / email address"
                        prefix={
                          <Img
                            src="images/img_user.svg"
                            className="mt-auto mb-px mr-3.5"
                            alt="user"
                          />
                        }
                      ></Input>
                      <Input
                        wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                        className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                        type="password"
                        name="textfieldlarge_One"
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
                    <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                      <Input
                        wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                        className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                        type="email"
                        name="textfieldlarge_Two"
                        placeholder="user / email address"
                        prefix={
                          <Img
                            src="images/img_user.svg"
                            className="mt-auto mb-px mr-3.5"
                            alt="user"
                          />
                        }
                      ></Input>
                      <Input
                        wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                        className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                        type="password"
                        name="textfieldlarge_Three"
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
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <CheckBox
                    className="font-bold text-gray_600 text-left text-lg"
                    inputClassName="border-2 border-gray_900 border-solid h-[18px] mr-[5px] rounded w-[18px]"
                    name="iagreetoallterm_One"
                    id="iagreetoallterm_One"
                    label="I agree to all Terms & Conditions"
                  ></CheckBox>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button className="bg-gray_900 cursor-pointer font-bold sm:px-5 px-6 py-5 rounded-[10px] text-center text-lg text-white_A700 w-full">
                  Create Account
                </Button>
                <Button
                  className="bg-white_A700 border border-gray_600 border-solid cursor-pointer flex items-center justify-center min-w-[620px] md:min-w-full px-6 py-5 rounded-[10px] w-auto"
                  leftIcon={
                    <Img
                      src="images/img_refresh_gray_900.svg"
                      className="mb-[5px] mr-2.5"
                      alt="refresh"
                    />
                  }
                >
                  <div className="font-bold sm:px-5 text-gray_900 text-left text-lg">
                    Create Account with Google
                  </div>
                </Button>
              </div>
              <Line className="bg-bluegray_100 h-px w-full" />
              <div className="flex flex-row gap-2 items-start justify-center w-full">
                <Text
                  className="font-semibold text-center text-gray_600 tracking-[-0.40px] w-auto"
                  variant="body1"
                >
                  Have an account?
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

export default CreateAccountModal;
