import React, { useState } from "react";
import ModalProvider from "react-modal";
import LogInModal from "modals/LogIn";

import { Text, Img, Input, CheckBox, Button, Line } from "components";
import axios from "axios";
const CreateAccountModal = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isOpenLogInModal, setLogInModal] = useState(false);

  function handleOpenLogInModal() {
    setLogInModal(true);
  }
  function handleCloseLogInModal() {
    setLogInModal(false);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (!event.target.value) {
      setUsernameError("Username is required");
    } else if (event.target.value.length < 3) {
      setUsernameError("Username must be at least 3 characters long");
    } else {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (!event.target.value) {
      setPasswordError("Password is required");
    } else if (event.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!event.target.value) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(event.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (!event.target.value) {
      setConfirmPasswordError("Confirm password is required");
    } else if (event.target.value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const isFormValid = () => {
    return (
      username !== "" &&
      password !== "" &&
      email !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    );
  };
  const createUser = () => {
    const userData = {
      name: username,
      email: email,
      password: password,
    };
    console.log(username, email, password);

    axios
      .post(
        "https://the-home-backend.onrender.com/api/users/register",
        userData
      )
      .then((response) => {
        console.log("User created successfully!", response);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[48%]"
        overlayClassName="bg-gray_900_cc fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="sm:h-auto md:h-auto max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start md:px-5 px-[30px] py-10 rounded-[10px] w-full">
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
                        wrapClassName={`bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full ${
                          usernameError ? "border-red-500" : ""
                        }`}
                        className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                        type="text"
                        name="textfieldlarge"
                        placeholder="User Name"
                        prefix={
                          <Img
                            src="images/img_user.svg"
                            className="mt-auto mb-px mr-3.5"
                            alt="user"
                          />
                        }
                        onChange={handleUsernameChange}
                        value={username}
                      ></Input>
                      {usernameError && (
                        <p className="text-red-500 text-xs italic">
                          {usernameError}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                      <Input
                        wrapClassName={`bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full ${
                          passwordError ? "border-red-500" : ""
                        }`}
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
                        onChange={handlePasswordChange}
                        value={password}
                      ></Input>
                      {passwordError && (
                        <p className="text-red-500 text-xs italic">
                          {passwordError}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                      <Input
                        wrapClassName={`bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full ${
                          emailError ? "border-red-500" : ""
                        }`}
                        className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                        type="email"
                        name="textfieldlarge_Two"
                        placeholder="Email Address"
                        prefix={
                          <Img
                            src="images/img_user.svg"
                            className="mt-auto mb-px mr-3.5"
                            alt="user"
                          />
                        }
                        onChange={handleEmailChange}
                        value={email}
                      />
                      {emailError && (
                        <p className="text-red-500 text-xs italic">
                          {emailError}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                      <Input
                        wrapClassName={`bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full ${
                          confirmPasswordError ? "border-red-500" : ""
                        }`}
                        className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                        type="password"
                        name="textfieldlarge_Three"
                        placeholder="Confirm Password"
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
                        onChange={handleConfirmPasswordChange}
                        value={confirmPassword}
                      />
                      {confirmPasswordError && (
                        <p className="text-red-500 text-xs italic">
                          {confirmPasswordError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start w-full">
                  <CheckBox
                    className="font-bold text-gray_600 text-left text-lg"
                    inputClassName="border-2 border-gray_900 border-solid h-[18px] mr-[5px] rounded w-[18px]"
                    name="iagreetoallterm_One"
                    id="iagreetoallterm_One"
                    label="I agree to all Terms & Conditions"
                    onClick={() => setIsChecked(!isChecked)}
                  ></CheckBox>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button
                  className={`${
                    !isFormValid() || !isChecked
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  } bg-gray_900 cursor-pointer font-bold sm:px-5 px-6 py-5 rounded-[10px] text-center text-lg text-white_A700 w-full`}
                  disabled={!isFormValid() || !isChecked}
                  onClick={createUser}
                >
                  Create Account
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
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto cursor-pointer"
                  variant="body1"
                  onClick={handleOpenLogInModal}
                >
                  Log in
                </Text>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
      {isOpenLogInModal ? (
        <LogInModal
          isOpen={isOpenLogInModal}
          onRequestClose={handleCloseLogInModal}
        />
      ) : null}
    </>
  );
};

export default CreateAccountModal;
