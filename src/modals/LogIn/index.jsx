import React, { useState } from "react";
import ModalProvider from "react-modal";
import axios from "axios";
import CreateAccountModal from "modals/CreateAccount";
import { Text, Img, Input, CheckBox, Button, Line } from "components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogInModal = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isOpenCreateAccountModal, setCreateAccountModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toast = (message) => {
    // create a new element to hold the notification
    const notification = document.createElement("div");

    // set the notification text and style
    notification.textContent = message;
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.padding = "10px";
    notification.style.background = "#333";
    notification.style.color = "#fff";
    notification.style.borderRadius = "5px";
    notification.style.borderBottomColor = "red";
    notification.style.fontFamily = "Arial, sans-serif";
    notification.style.fontSize = "16px";
    notification.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)";
    notification.style.transition = "opacity 0.5s ease-in-out";
    notification.style.opacity = "0.9";
    notification.style.zIndex = "9999";

    // append the notification to the document body
    document.body.appendChild(notification);

    // remove the notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const notify = () => toast("Logging in...");

  function handleOpenCreateAccountModal() {
    setCreateAccountModal(true);
  }
  function handleCloseCreateAccountModal() {
    setCreateAccountModal(false);
    console.log("hello");
  }
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
  const isFormValid = () => {
    return password !== "" && email !== "";
  };
  const loginUser = () => {
    const userData = {
      email: email,
      password: password,
    };
    console.log(email, password);

    axios
      .post("https://the-home-backend.onrender.com/api/users/login", userData)
      .then((response) => {
        console.log("User logged in successfully!", response);
        const token = response.data.token;
        const name = response.data.name;
        localStorage.setItem("token", token);
        localStorage.setItem("userName", name);
        console.log("Token stored:", token);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

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
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Text
                      className="flex-1 text-gray_900 text-left tracking-[-0.72px] w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Log in
                    </Text>
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="common-pointer h-[30px] w-[30px]"
                      onClick={props.onRequestClose}
                      alt="close"
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
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
                <div className="flex flex-row gap-5 items-center justify-between w-full">
                  <CheckBox
                    className="font-bold text-gray_900 text-left text-lg"
                    inputClassName="border-2 border-gray_900 border-solid h-[18px] mr-[5px] rounded w-[18px]"
                    name="remember"
                    id="remember"
                    label="Remember"
                  ></CheckBox>
                  <Text
                    className="font-bold text-gray_900 text-right w-auto"
                    variant="body3"
                  >
                    Forgot Password
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button
                  className={`${
                    !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                  } bg-gray_900 cursor-pointer font-bold sm:px-5 px-6 py-5 rounded-[10px] text-center text-lg text-white_A700 w-full`}
                  disabled={!isFormValid()}
                  onClick={() => {
                    loginUser();
                    props.onRequestClose();
                    setIsLoggedIn(true);
                    notify();
                  }}
                >
                  Log in
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
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto cursor-pointer"
                  variant="body1"
                  onClick={handleOpenCreateAccountModal}
                >
                  Create Account
                </Text>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
      {isOpenCreateAccountModal ? (
        <CreateAccountModal
          isOpen={isOpenCreateAccountModal}
          onRequestClose={handleCloseCreateAccountModal}
        />
      ) : null}
    </>
  );
};

export default LogInModal;
