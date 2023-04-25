import React from "react";

import { Img, Text, List, Button } from "components";
import { useNavigate } from "react-router-dom";
import LogInModal from "modals/LogIn";
import { UserIcon } from "components/Icones";

const LoginHeader = (props) => {
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
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between m-2 w-[97vw] p-2">
          <div className="header-row my-px">
            <div
              className="common-pointer flex flex-row gap-[11px] items-center justify-start"
              onClick={() => navigate("/")}
            >
              <Img src="images/img_home.svg" className="h-10 w-10" alt="home" />
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
            <div>
              <form className="flex flex-row items-center">
                <UserIcon />
                <select
                  placeholder="Price"
                  className="font-manrope uppercase text-sm font-bold  tracking-noraml border-transparent"
                >
                  <option>User</option>
                  <option value="lowToHigh">Log out</option>
                </select>
              </form>
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
