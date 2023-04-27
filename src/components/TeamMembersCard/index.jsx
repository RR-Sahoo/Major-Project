import React from "react";

import { Img, Text } from "components";

const TeamMembersCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src={props?.teamMemberProfilePic}
          className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
          alt="rectangle5596"
        />
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="font-manrope font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
            variant="body1"
          >
            {props?.teamMemberName}
          </Text>
          <Text
            className="font-manrope font-normal not-italic text-gray_700 text-left w-auto"
            variant="body3"
          >
            {props?.teamMemberPosition}
          </Text>
        </div>
      </div>
    </>
  );
};

TeamMembersCard.defaultProps = {
  teamMemberProfilePic: "images/img_rectangle5596.png",
  teamMemberName: "Kausar Pial",
  teamMemberPosition: "CEO",
};

export default TeamMembersCard;
