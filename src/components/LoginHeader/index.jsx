import React, { useState } from "react";
import axios from "axios";
import { Img, Text, List, Button } from "components";
import { useNavigate } from "react-router-dom";
import LogInModal from "modals/LogIn";
import { UserIcon } from "components/Icones";
import { Dropdown } from "reactstrap";

const LoginHeader = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const navigate = useNavigate();
  const [isOpenLogInModal, setLogInModal] = React.useState(false);

  function handleOpenLogInModal() {
    setLogInModal(true);
  }
  function handleCloseLogInModal() {
    setLogInModal(false);
  }

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

    // append the notification to the document body
    document.body.appendChild(notification);

    // remove the notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const notify = () => toast("Logging out...");

  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("userName", "");
    navigate("/");
    window.location.reload();
    notify();
  };

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between m-2 w-[97vw] p-2">
          <div className="header-row my-px">
            <div
              className="common-pointer flex flex-row gap-[11px] items-center justify-start"
              onClick={() => navigate("/")}
            >
              <Img
                src="/images/img_home.svg"
                className="h-10 w-10"
                alt="home"
              />
              <Text
                className="font-markoone font-normal not-italic text-left text-orange_A700 w-auto"
                variant="body1"
              >
                Relasto
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col  sm:hidden items-center justify-center w-full sm:w-full">
            <List className="sm:flex-col flex gap-14" orientation="horizontal">
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="common-pointer font-manrope font-semibold text-gray_900 text-left w-auto"
                  variant="body4"
                  onClick={() => navigate("/")}
                >
                  Home
                </Text>
                <Img
                  src="images/img_arrowdown_gray_600.svg"
                  className="h-4 hidden w-4"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="common-pointer font-manrope font-semibold text-gray_900 text-left w-auto"
                  variant="body4"
                  onClick={() => navigate("/listing")}
                >
                  Listing
                </Text>
                <Img
                  src="images/img_arrowdown_gray_600.svg"
                  className="h-4 hidden w-4"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="common-pointer font-manrope font-semibold text-gray_900 text-left w-auto"
                  variant="body4"
                  onClick={() => navigate("/agentlist")}
                >
                  Agents
                </Text>
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="common-pointer font-manrope font-semibold text-gray_900 text-left w-auto"
                  variant="body4"
                  onClick={() => navigate("/aboutus")}
                >
                  About Us
                </Text>
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="common-pointer font-manrope font-semibold text-gray_900 text-left w-auto"
                  variant="body4"
                  onClick={() => navigate("/blogpage")}
                >
                  Blog
                </Text>
              </div>
            </List>
          </div>
          <section className="flex items-center">
            <div className="flex items-center">
              <UserIcon />
              <h2 className="m-2">{localStorage.getItem("userName")}</h2>
              <Button
                style={{ width: "100px" }}
                className="bg-gray_900 cursor-pointer font-semibold sm:px-5 px-3 py-3 rounded-[10px] text-base text-center text-white_A700  hover:bg-blue-700 focus:outline-none focus:shadow-outline transform transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md"
                onClick={logout}
              >
                Log Out
              </Button>
            </div>
          </section>
        </div>
      </header>
      {isOpenLogInModal ? (
        <LogInModal
          isOpen={isOpenLogInModal}
          onRequestClose={handleCloseLogInModal}
        />
      ) : null}
    </>
  );
};

LoginHeader.defaultProps = {};

export default LoginHeader;
