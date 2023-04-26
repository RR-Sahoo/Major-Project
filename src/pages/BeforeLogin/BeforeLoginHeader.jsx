import React from "react";

import { Img, Text, List, Button } from "components";
import { useNavigate } from "react-router-dom";
import LogInModal from "modals/LogIn";

const BeforeLoginHeader = (props) => {
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

BeforeLoginHeader.defaultProps = {};

export default BeforeLoginHeader;
