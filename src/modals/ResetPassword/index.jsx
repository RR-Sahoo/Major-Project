import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, Button, Line } from "components";

const ResetPasswordModal = (props) => {
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
                        Reset Password
                      </Text>
                      <Img
                        src="images/img_close_gray_900.svg"
                        className="common-pointer h-[30px] w-[30px]"
                        onClick={props.onRequestClose}
                        alt="close"
                      />
                    </div>
                    <Text
                      className="font-normal leading-[180.00%] max-w-[420px] md:max-w-full not-italic text-gray_900 text-left"
                      variant="body3"
                    >
                      <>
                        Enter the email address associated with your account and
                        we&#39;ll send you a link to reset your password.
                      </>
                    </Text>
                  </div>
                  <Input
                    wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                    className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                    type="email"
                    name="textfieldlarge"
                    placeholder="user / email address"
                    prefix={
                      <Img
                        src="images/img_mail_gray_600_24x24.svg"
                        className="mt-auto mb-px mr-3.5"
                        alt="mail"
                      />
                    }
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button className="bg-gray_900 cursor-pointer font-bold sm:px-5 px-6 py-5 rounded-[10px] text-center text-lg text-white_A700 w-full">
                  Get OTP
                </Button>
                <Button className="bg-white_A700 border border-gray_600 border-solid cursor-pointer font-bold sm:px-5 px-6 py-5 rounded-[10px] text-center text-gray_900 text-lg w-full">
                  Return to sign in
                </Button>
              </div>
              <Line className="bg-bluegray_100 h-px w-full" />
              <div className="flex flex-row gap-2 items-start justify-center w-full">
                <Text
                  className="font-semibold text-center text-gray_600 tracking-[-0.40px] w-auto"
                  variant="body1"
                >
                  Don’t have an account?
                </Text>
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                  variant="body1"
                >
                  Create Account
                </Text>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default ResetPasswordModal;
