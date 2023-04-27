import React from "react";
import LandingPageCard from "components/LandingPageCard";

const AgentPropertyListing = () => {
  const landingPageCardPropList = [
    { image: "" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
  ];
  return (
    <div className="flex items-center justify-center w-full flex-grow">
      <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
        {landingPageCardPropList.map((props, index) => (
          <React.Fragment key={`LandingPageCard${index}`}>
            <LandingPageCard
              className="flex flex-1 flex-col h-full items-start justify-start w-full"
              p286162ndaveoaklOne="2861 62nd Ave, Oakland, CA 94605"
              p3bedroom="3 Bed Room"
              bathcounter="1 Bath"
              sqftcounter="1,032 sqft"
              p1bath="Family"
              viewDetails="View Details"
              price="$649,900"
              {...props}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AgentPropertyListing;
