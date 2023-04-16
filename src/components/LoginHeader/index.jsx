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
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
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
          <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full">
            <Text
              className="common-pointer font-manrope font-semibold text-gray_900 text-left w-auto"
              variant="body4"
              onClick={() => navigate("/")}
            >
              Home
            </Text>
            <Text
              className="common-pointer font-manrope font-semibold text-gray_900 text-left w-auto"
              variant="body4"
              onClick={() => navigate("/listing")}
            >
              Listing
            </Text>
            <Text
              className="common-pointer font-manrope font-semibold text-gray_900 text-left w-auto"
              variant="body4"
              onClick={() => navigate("/agentlist")}
            >
              Agents
            </Text>
            <Text
              className="common-pointer font-manrope font-semibold text-left text-gray_900 w-auto"
              variant="body4"
              onClick={() => navigate("/listingmapview")}
            >
              Property
            </Text>
            <Text
              className="common-pointer font-manrope font-semibold text-gray_900 text-left w-auto"
              variant="body4"
              onClick={() => navigate("/blogpage")}
            >
              Blog
            </Text>
          </div>
          <section className="flex items-center">
            <UserIcon />
            <Text className="common-pointer font-manrope font-semibold text-gray_900 text-left w-auto mx-2">
              Subhadarsini..
            </Text>
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
