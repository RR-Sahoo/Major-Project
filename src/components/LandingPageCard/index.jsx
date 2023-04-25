import React from "react";
import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const LandingPageCard = (props) => {
  const navigate = useNavigate();
  const isRent = props.tag === "rent" ? true : false;

  return (
    <>
      <div className={props.className}>
        <div className="relative w-full">
          <Img
            src={props?.image}
            className="h-[260px] sm:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full"
            alt="image"
          />
          <div
            className={`absolute top-0 left-0 m-4 p-2 ${
              isRent ? "bg-green-500" : "bg-red-500"
            } text-white font-semibold rounded-full m-4 py-1 px-3`}
          >
            {isRent ? "Rent" : "Sell"}
          </div>
        </div>

        <div className="bg-gray_51 border border-red_101 border-solid flex items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none w-full">
          <div className="flex flex-col gap-[27px] items-start justify-start w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <Img src="images/img_eye.svg" className="h-6 w-6" alt="eye" />
              <Text
                className="flex-1 font-manrope font-semibold text-gray_900 text-left w-auto"
                variant="body4"
              >
                {props?.address}
              </Text>
            </div>
            <div className="flex flex-col gap-[21px] items-start justify-start w-full">
              <div className="flex flex-row gap-10 items-center justify-between w-full">
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    src="images/img_bookmark.svg"
                    className="h-5 w-5"
                    alt="bookmark"
                  />
                  <Text
                    className="flex-1 font-manrope font-semibold text-gray_700 text-left w-auto"
                    variant="body4"
                  >
                    {props?.bedroom}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    src="images/img_ticket.svg"
                    className="h-5 w-5"
                    alt="ticket"
                  />
                  <Text
                    className="font-manrope font-semibold text-gray_700 text-left w-auto"
                    variant="body4"
                  >
                    {props?.bathroom}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center justify-between w-full">
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    src="images/img_icon.svg"
                    className="h-5 w-5"
                    alt="icon"
                  />
                  <Text
                    className="flex-1 font-manrope font-semibold text-gray_700 text-left w-auto"
                    variant="body4"
                  >
                    {props?.sqftcounter}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    src="images/img_settings.svg"
                    className="h-5 w-5"
                    alt="settings"
                  />
                  <Text
                    className="font-manrope font-semibold text-gray_700 text-left w-auto"
                    variant="body4"
                  >
                    {props?.p1bath}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[31px] items-center justify-start w-full">
              <Button
                className="common-pointer bg-gray_900 cursor-pointer flex-1 font-manrope font-semibold sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-white_A700 w-full"
                onClick={() => navigate(`/properties/${props.id}`)}
              >
                {props?.viewDetails}
              </Button>
              <Text
                className="flex-1 font-bold font-manrope text-gray_900 text-left tracking-[-0.48px] w-auto"
                as="h5"
                variant="h5"
              >
                {props?.price}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageCard.defaultProps = {
  image: "images/img_image_260x384.png",
  p286162ndaveoaklOne: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom: "3 Bed Room",
  bathcounter: "1 Bath",
  sqftcounter: "1,032 sqft",
  p1bath: "Family",
  viewDetails: "View Details",
  price: "$649,900",
};

export default LandingPageCard;
