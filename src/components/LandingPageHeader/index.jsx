import React from "react";

import { Img, Text, List, Button } from "components";
import { useNavigate } from "react-router-dom";
import LogInModal from "modals/LogIn";
import Logo from "../../assets/images/img_home.svg";

const LandingPageHeader = (props) => {
  const navigate = useNavigate();
  const [isOpenLogInModal, setLogInModal] = React.useState(false);

  function handleOpenLogInModal() {
    setLogInModal(true);
  }
  function handleCloseLogInModal() {
    setLogInModal(false);
  }

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div
              className="common-pointer flex flex-row gap-[11px] items-center justify-start"
              onClick={() => navigate("/")}
            >
              <Img src={Logo} className="h-10 w-10" alt="home" />
              <Text
                className="font-markoone font-normal not-italic text-left text-orange_A700 w-auto"
                variant="body1"
              >
                Relasto
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          {props.loggedIn !== false && (
            <div className="flex sm:flex-1 sm:flex-col  sm:hidden items-center justify-center w-full sm:w-full">
              <List
                className="sm:flex-col flex gap-14"
                orientation="horizontal"
              >
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
          )}
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[228px]">
            <Button
              className="common-pointer bg-gray_900 cursor-pointer font-manrope font-semibold sm:px-5 px-6 py-[13px] rounded-[10px] text-base text-center text-white_A700 w-full"
              onClick={handleOpenLogInModal}
            >
              Log in
            </Button>
          </div>
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

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
