import React, { useEffect, useState } from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Img, Button, Text, GoogleMap, List, Input } from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { UserIcon } from "@heroicons/react/outline";
import {
  ArrowIcon,
  DateIcon,
  MailIcon,
  PhoneIcon,
  RightArrowIcon,
} from "components/Icones";
import LoginHeader from "components/LoginHeader";

const PropertyDetailsPage = (props) => {
  const [showMap, setShowMap] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [show360, setShow360] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [mapLocation, setMapLocation] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleMapClick = () => {
    setShowMap(true);
    setShowVideo(false);
    setShowPhotos(false);
    setShow360(false);
  };

  const handleVideoClick = () => {
    setShowMap(false);
    setShowVideo(true);
    setShowPhotos(false);
    setShow360(false);
  };

  const handlePhotosClick = () => {
    setShowMap(false);
    setShowVideo(false);
    setShowPhotos(true);
    setShow360(false);
  };
  const handle360Click = () => {
    setShowMap(false);
    setShowVideo(false);
    setShowPhotos(false);
    setShow360(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://the-home-backend.onrender.com/api/properties/${id}`
        );
        setPropertyDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <LoginHeader />
            <div className="flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
                <div className="flex flex-1 items-center justify-start w-full">
                  <Img
                    src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iNIfKpJ7Z_M0/v1/1200x-1.jpg"
                    className="h-[550px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5610"
                  />
                </div>
                <div className="flex sm:flex-1 flex-col gap-6 h-[550px] md:h-auto items-start justify-start self-stretch w-auto sm:w-full">
                  <Img
                    src="https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg"
                    className="h-[263px] sm:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5611"
                  />
                  <div className="h-[263px] relative w-96 sm:w-full">
                    <Img
                      src="https://res.cloudinary.com/g5-assets-cld/image/upload/x_0,y_0,h_598,w_897,c_crop/q_auto,f_auto,fl_lossy,g_center,h_667,w_1000/g5/g5-c-5befy22d4-morgan-properties/g5-cl-1hellpd464-hyde-park-apartment-homes/uploads/13_mk1yaa.jpg"
                      className="h-[263px] m-auto object-cover rounded-[10px] w-full"
                      alt="rectangle5612"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1200px] mx-auto w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-11 items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="leading-[135.00%] max-w-[712px] md:max-w-full text-gray_900 text-left tracking-[-0.56px]"
                            as="h4"
                            variant="h4"
                          >
                            {propertyDetails.name_of_property}
                          </Text>
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                            variant="body1"
                          >
                            {propertyDetails.Location}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                          variant="body1"
                        >
                          {propertyDetails.property_desc}
                        </Text>
                        <Text
                          className="font-normal leading-[180.00%] max-w-[712px] md:max-w-full not-italic text-gray_600 text-left"
                          variant="body3"
                        >
                          A slider is great way to display a slideshow featuring
                          images or videos, usually on your homepage.Adding
                          sliders to your site is no longer difficult. You don’t
                          have to know coding anymore. Just use a slider widget
                          and it will automatically insert the slider on your
                          web page.So, the Elementor slider would be a great
                          tool to work with when building a WordPress site.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-6 items-start justify-start w-full">
                          <Text
                            className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Local Information
                          </Text>
                          <div className="gap-3 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start md:pr-10 sm:pr-5 pr-[200px] w-full">
                            <Button
                              className="border border-bluegray_100 border-solid cursor-pointer flex-1 font-semibold sm:px-5 px-6 py-3.5 rounded-[10px] hover:bg-gray-800 hover:text-white_A700 text-base text-center text-gray_900 w-full"
                              onClick={handleMapClick}
                            >
                              Map
                            </Button>
                            <Button
                              className="border border-bluegray_100 border-solid cursor-pointer flex-1 font-semibold sm:px-5 px-6 py-3.5 rounded-[10px] hover:bg-gray-800 hover:text-white_A700 text-base text-center text-gray_900 w-full"
                              onClick={handleVideoClick}
                            >
                              Video
                            </Button>
                            <Button
                              className="border border-bluegray_100 border-solid cursor-pointer flex-1 font-semibold sm:px-5 px-6 py-3.5 rounded-[10px] hover:bg-gray-800 hover:text-white_A700 text-base text-center text-gray_900 w-full"
                              onClick={handle360Click}
                            >
                              360 view
                            </Button>
                            <Button
                              className="border border-bluegray_100 border-solid cursor-pointer flex-1 font-semibold px-4 py-3.5 rounded-[10px] hover:bg-gray-800 hover:text-white_A700 text-base text-center text-gray_900 w-full"
                              onClick={handlePhotosClick}
                            >
                              Photos
                            </Button>
                          </div>
                        </div>
                        <div className="h-[400px] relative w-full">
                          {showMap && (
                            <div className="h-[400px] relative w-full">
                              <GoogleMap
                                className="h-[400px] m-auto rounded-[10px] w-full"
                                showMarker={false}
                              ></GoogleMap>
                              <Img
                                src="/images/img_frame1000001425.svg"
                                className="absolute h-[54px] inset-[0] m-auto w-[389px]"
                                alt="frame1000001425"
                              />
                            </div>
                          )}
                          {showVideo && (
                            <div className="h-[400px] relative w-full">
                              <iframe
                                width="700"
                                height="415"
                                src="https://www.youtube.com/embed/watch?v=2b8xuMS1tc4"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              />
                            </div>
                          )}
                          {show360 && (
                            <div className="h-[400px] relative w-full">
                              <iframe
                                style={{ width: "100%", height: "100%" }}
                                src="https://my.matterport.com/show/?m=roWLLMMmPL8"
                                className="vr-view"
                                allowFullScreen
                                allow="xr-spatial-tracking;"
                              ></iframe>
                            </div>
                          )}
                          {showPhotos && (
                            <div className="h-[400px] relative w-full">
                              <iframe
                                srcDoc={`
        <html>
          <body style="margin: 0;">
            ${propertyDetails.photos
              .map(
                (photo) =>
                  `<div style="margin-bottom: 20px;"><img src="${photo}" style="max-width: 100%;"/></div>`
              )
              .join("")}
          </body>
        </html>
      `}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  border: "none",
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Home Highlights
                      </Text>
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-[150px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                          <div className="flex flex-row gap-[55px] items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray_600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-auto"
                                variant="body3"
                              >
                                Type
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-auto"
                              variant="body3"
                            >
                              {propertyDetails.Property_type}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[47px] items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray_600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-auto"
                                variant="body3"
                              >
                                Bathrooms
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-auto"
                              variant="body3"
                            >
                              {propertyDetails.Bathrooms}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[85px] items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray_600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-auto"
                                variant="body3"
                              >
                                Bedrooms
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-auto"
                              variant="body3"
                            >
                              {propertyDetails.Bedrooms}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-10 items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray_600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-auto"
                                variant="body3"
                              >
                                Year Built
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-auto"
                              variant="body3"
                            >
                              {propertyDetails.BuiltYear}
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                          <div className="flex flex-row gap-20 items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray_600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-auto"
                                variant="body3"
                              >
                                Owner
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-auto"
                              variant="body3"
                            >
                              {propertyDetails.developer_name}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-8 items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray_600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-auto"
                                variant="body3"
                              >
                                Price/Sqft
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-auto"
                              variant="body3"
                            >
                              {propertyDetails.property_size}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[66px] items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray_600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-auto"
                                variant="body3"
                              >
                                Listed
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-auto"
                              variant="body3"
                            >
                              No Info
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                      <Text
                        className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Agent Information
                      </Text>
                      <div className="flex flex-row gap-6 items-center justify-start w-full">
                        <Img
                          src="/images/img_rectangle5599.png"
                          className="h-[150px] md:h-auto object-cover rounded-[10px] w-[150px]"
                          alt="rectangle5599"
                        />
                        <div className="flex flex-col gap-[3px] items-start justify-start self-stretch w-auto">
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                            variant="body1"
                          >
                            Bruno Fernandes
                          </Text>
                          <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-1 items-start justify-start self-stretch w-auto">
                              <Img
                                src="/images/img_star.svg"
                                className="h-4 w-4"
                                alt="star"
                              />
                              <Img
                                src="/images/img_star.svg"
                                className="h-4 w-4"
                                alt="star_One"
                              />
                              <Img
                                src="/images/img_star.svg"
                                className="h-4 w-4"
                                alt="star_Two"
                              />
                              <Img
                                src="/images/img_star.svg"
                                className="h-4 w-4"
                                alt="star_Three"
                              />
                              <Img
                                src="/images/img_star_gray_600.svg"
                                className="h-4 w-4"
                                alt="star_Four"
                              />
                            </div>
                            <Text
                              className="font-semibold text-gray_900 text-left w-auto"
                              variant="body4"
                            >
                              4 review
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              src="/images/img_mail_gray_600.svg"
                              className="h-5 w-5"
                              alt="mail"
                            />
                            <Text
                              className="font-medium text-gray_600 text-left w-auto"
                              variant="body4"
                            >
                              bruno@relasto .com
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              src="/images/img_call.svg"
                              className="h-5 w-5"
                              alt="call"
                            />
                            <Text
                              className="font-medium text-gray_600 text-left w-auto"
                              variant="body4"
                            >
                              +65 0231 965 965
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex sm:flex-1 items-start justify-start p-6 sm:px-5 rounded-[10px] self-stretch w-auto sm:w-full">
                  <div className="flex flex-col gap-10 items-start justify-start w-[336px]">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Request for Visit
                      </Text>
                      <div className="flex flex-col gap-3 h-[440px] md:h-auto items-start justify-start w-full">
                        <Input
                          wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                          className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                          type="text"
                          name="textfieldlarge"
                          placeholder="Full Name"
                          prefix={
                            <UserIcon className="h-6 items-center mr-2" />
                          }
                        ></Input>
                        <Input
                          wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                          className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                          type="email"
                          name="textfieldlarge_One"
                          placeholder="Email Address"
                          prefix={<MailIcon className="mr-2 h-6" />}
                        ></Input>
                        <Input
                          wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                          className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                          type="number"
                          name="textfieldlarge_Two"
                          placeholder="Phone Number"
                          prefix={<PhoneIcon className="mr-2 h-6" />}
                        ></Input>
                        <Input
                          wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                          className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                          name="textfieldlarge_Three"
                          placeholder="Date"
                          prefix={<DateIcon className="mr-2 h-6" />}
                        ></Input>
                        <div className="bg-white_A700 border border-bluegray_100 border-solid flex h-[152px] md:h-auto items-start justify-start px-[19px] py-3.5 rounded-[10px] w-full">
                          <Text
                            className="font-semibold text-gray_600 text-left w-auto"
                            variant="body3"
                          >
                            Message
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-gray_900 cursor-pointer font-semibold sm:px-5 px-6 py-5 rounded-[10px] text-base text-center text-white_A700 w-full">
                      Send Request
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-10 items-center justify-center max-w-[1200px] mx-auto w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                <Text
                  className="flex-1 text-gray_900 text-left tracking-[-0.56px] w-auto"
                  as="h4"
                  variant="h4"
                >
                  Latest Property Listings
                </Text>
                <Button
                  className="bg-transparent cursor-pointer flex items-center justify-center min-w-[124px] w-auto"
                  rightIcon={<RightArrowIcon />}
                >
                  <div
                    className="font-bold text-left text-lg text-orange_A700"
                    onClick={() => navigate("/listing")}
                  >
                    Explore All
                  </div>
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                orientation="horizontal"
              >
                {/*{landingPageCardPropList.map((props, index) => (
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
                ))}*/}
              </List>
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default PropertyDetailsPage;
