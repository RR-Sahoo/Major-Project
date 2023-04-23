import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Img } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import AgentProfileHeader from "./Components/AgentProfileHeader";
import AgentProfileAbout from "./Components/AgentProfileAbout";
import AgentProfileReview from "./Components/AgentProfileReview";
import AgentTabSection from "./Components/AgentTabSection";

const AgentProfilePage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-center mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex flex-col font-manrope md:px-5 relative w-full">
            <div className="flex flex-1 items-center justify-start mx-auto w-full">
              <Img
                src="images/img_coverimage.png"
                className="h-[250px] sm:h-auto object-cover w-full"
                alt="coverimage"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[58px] items-center justify-start mt-[-46px] mx-auto w-full z-[1]">
              <AgentProfileHeader />
              <AgentTabSection />
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default AgentProfilePage;
