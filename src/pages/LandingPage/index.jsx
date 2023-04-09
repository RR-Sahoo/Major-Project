import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Button, Input, Img, List, CheckBox, Slider } from "components";
import LandingPageAdvantageCard from "components/LandingPageAdvantageCard";
import LandingPageNumberCount from "components/LandingPageNumberCount";
import LandingPageCard from "components/LandingPageCard";
import LandingPageBlogCard from "components/LandingPageBlogCard";
import LandingPageFooter from "components/LandingPageFooter";
import { useNavigate } from "react-router-dom";
import CreateAccountModal from "modals/CreateAccount";

const LandingPagePage = () => {
  const navigate = useNavigate();
  const [isOpenCreateAccountModal, setCreateAccountModal] =
    React.useState(false);

  function handleOpenCreateAccountModal() {
    setCreateAccountModal(true);
  }
  function handleCloseCreateAccountModal() {
    setCreateAccountModal(false);
  }

  const landingPageAdvantageCardPropList = [
    { cardText: "Search your location", cardImage: "images/img_refresh.svg" },
    { cardText: "Visit Appointment", cardImage: "images/img_instagram.svg" },
    { cardText: "Get your dream house", cardImage: "images/img_camera.svg" },
    {
      cardText: "Enjoy your Appointment",
      cardImage: "images/img_instagram_orange_a700.svg",
    },
  ];
  const landingPageNumberCountPropList = [
    {
      desc: (
        <>
          Owned from
          <br />
          Properties transactions
        </>
      ),
      number: "$15.4M",
    },
    { desc: "Properties for Buy & sell Successfully", number: "25K+" },
    { desc: "Daily completed transactions", number: "500" },
  ];
  const landingPageCardPropList = [
    { image: "images/img_image_260x384.png" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const landingPageBlogCardPropList = [
    {
      blogCardTitle: "9 Easy-to-Ambitious DIY Projects to Improve Your Home",
      blogCardImage: "images/img_image_350x384.png",
    },
    {
      blogCardTitle:
        "Serie Shophouse Launch In July, Opportunity For Investors",
      blogCardImage: "images/img_image_6.png",
    },
    {
      blogCardTitle:
        "Looking for a New Place? Use This Time to Create Your Wishlist",
      blogCardImage: "images/img_image_7.png",
    },
  ];

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="bg-yellow_50 flex font-manrope items-start justify-start md:pl-10 sm:pl-5 pl-[120px] py-[50px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start ml-auto w-full">
              <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] text-gray_900 text-left tracking-[-0.92px]"
                    as="h2"
                    variant="h2"
                  >
                    <>
                      Find a perfect property
                      <br />
                      Where you&#39;ll love to live
                    </>
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] max-w-[610px] md:max-w-full not-italic text-gray_700 text-left"
                    variant="body1"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="bg-white_A700 flex items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-full">
                      <Button className="bg-gray_900 cursor-pointer flex-1 font-bold sm:px-5 px-[31px] py-4 rounded-[10px] text-center text-lg text-white_A700 w-full">
                        Buy
                      </Button>
                      <Button className="bg-gray_300 cursor-pointer flex-1 font-bold sm:px-5 px-[31px] py-4 rounded-[10px] text-center text-gray_900 text-lg w-full">
                        Sell
                      </Button>
                      <Button className="bg-gray_300 cursor-pointer flex-1 font-bold sm:px-5 px-[26px] py-4 rounded-[10px] text-center text-gray_900 text-lg w-full">
                        Rent
                      </Button>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Input
                          wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                          className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                          name="textfieldlarge"
                          placeholder="City/Street"
                          suffix={
                            <Img
                              src="images/img_location.svg"
                              className="mt-auto mb-[5px] ml-[35px]"
                              alt="location"
                            />
                          }
                        ></Input>
                        <Input
                          wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                          className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                          name="textfieldlarge_One"
                          placeholder="Property Type"
                          suffix={
                            <Img
                              src="images/img_sort.svg"
                              className="mt-auto mb-[5px] ml-[35px]"
                              alt="sort"
                            />
                          }
                        ></Input>
                        <Input
                          wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex px-4 py-3.5 rounded-[10px] w-full"
                          className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                          name="textfieldlarge_Two"
                          placeholder="Price Range"
                          suffix={
                            <Img
                              src="images/img_sort.svg"
                              className="mt-auto mb-[5px] ml-[35px]"
                              alt="sort"
                            />
                          }
                        ></Input>
                      </div>
                      <Button className="bg-gray_900 cursor-pointer font-bold sm:px-5 px-6 py-[21px] rounded-[10px] text-center text-lg text-white_A700 w-full">
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start w-[47%] md:w-full">
                <Img
                  src="images/img_image.png"
                  className="h-[503px] md:h-auto object-cover w-full"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
            <div className="bg-red_100 flex flex-1 h-[424px] md:h-auto items-start justify-center md:px-10 sm:px-5 px-[50px] py-[46px] rounded-[20px] w-full">
              <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] max-w-[488px] md:max-w-full text-gray_900 text-left tracking-[-0.72px]"
                    as="h3"
                    variant="h3"
                  >
                    Simple & easy way to find your dream Appointment
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] max-w-[488px] md:max-w-full not-italic text-gray_900 text-left"
                    variant="body3"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-gray_900 cursor-pointer font-semibold min-w-[138px] sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-white_A700 w-auto"
                  onClick={handleOpenCreateAccountModal}
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex flex-1 items-start justify-start w-full">
              <div className="sm:gap-5 gap-6 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                {landingPageAdvantageCardPropList.map((props, index) => (
                  <React.Fragment key={`LandingPageAdvantageCard${index}`}>
                    <LandingPageAdvantageCard
                      className="bg-deep_orange_50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_50 flex font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] py-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start max-w-[1200px] mx-auto w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[73%] md:w-full"
              orientation="horizontal"
            >
              {landingPageNumberCountPropList.map((props, index) => (
                <React.Fragment key={`LandingPageNumberCount${index}`}>
                  <LandingPageNumberCount
                    className="flex flex-col items-start justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <LandingPageNumberCount
              className="flex flex-1 flex-col items-start justify-start w-full"
              number="600+"
              desc="Reagular Clients"
            />
          </div>
        </div>
        <div className="flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] md:h-auto items-start justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-auto"
                  as="h3"
                  variant="h3"
                >
                  Featured Properties
                </Text>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px] w-auto"
                  onClick={() => navigate("/listing")}
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="mb-[3px] ml-2"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="font-bold text-left text-lg text-orange_A700">
                    Explore All
                  </div>
                </Button>
              </div>
              <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full">
                <Button className="bg-transparent cursor-pointer font-bold min-w-[159px] text-center text-gray_900 text-lg w-auto">
                  Resident Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[186px] text-center text-gray_400 text-lg w-auto">
                  Commercial Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[164px] text-center text-gray_400 text-lg w-auto">
                  Industrial Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[180px] text-center text-gray_400 text-lg w-auto">
                  Agriculture Property
                </Button>
              </div>
            </div>
            <div className="flex items-start justify-start w-full">
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
          </div>
        </div>
        <div className="bg-gray_51 flex font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[150px] items-center justify-center max-w-[1200px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-center justify-start w-full">
              <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] max-w-[557px] md:max-w-full text-gray_900 text-left tracking-[-0.72px]"
                    as="h3"
                    variant="h3"
                  >
                    Simple & easy way to find your dream Appointment
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] max-w-[557px] md:max-w-full not-italic text-gray_700 text-left"
                    variant="body3"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, when our power of
                    choice is untrammelled and when nothing prevents our being
                    able to do what we like best, every pleasure is to be
                    welcomed.
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-gray_900 cursor-pointer font-semibold min-w-[138px] sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-white_A700 w-auto"
                  onClick={handleOpenCreateAccountModal}
                >
                  Get Started
                </Button>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle18.png"
                    className="h-[327px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangleEighteen"
                  />
                  <Img
                    src="images/img_rectangle21.png"
                    className="h-[218px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangleTwentyOne"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle19.png"
                    className="h-[218px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangleNineteen"
                  />
                  <Img
                    src="images/img_rectangle20.png"
                    className="h-[327px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangleTwenty"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[157px] items-center justify-start w-full">
              <Img
                src="images/img_rectangle20_589x521.png"
                className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] w-auto sm:w-auto md:w-auto"
                alt="rectangleTwenty_One"
              />
              <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="leading-[140.00%] max-w-[521px] md:max-w-full text-gray_900 text-left tracking-[-0.72px]"
                      as="h3"
                      variant="h3"
                    >
                      Best rated host on popular rental sites
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] max-w-[521px] md:max-w-full not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, when our power of
                      choice is untrammelled.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <CheckBox
                      className="font-semibold text-gray_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      name="findexcellentde_One"
                      id="findexcellentde_One"
                      label="Find excellent deals"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-gray_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      name="friendlyhost"
                      id="friendlyhost"
                      label="Friendly host & Fast support"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-gray_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      name="securepaymentsy_One"
                      id="securepaymentsy_One"
                      label="Secure payment system"
                    ></CheckBox>
                  </div>
                </div>
                <Button
                  className="common-pointer bg-gray_900 cursor-pointer font-semibold min-w-[134px] py-[13px] rounded-[10px] text-base text-center text-white_A700 w-auto"
                  onClick={() => navigate("/listingmapview")}
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope gap-6 items-start justify-start w-full">
          <div className="flex items-center justify-center md:px-10 sm:px-5 px-[215px] w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="max-w-[1010px] mx-auto w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start mx-2.5">
                    <Img
                      src="images/img_rectangle5591.png"
                      className="flex-1 md:flex-none h-[344px] sm:h-auto object-cover rounded-lg w-full"
                      alt="rectangle5591"
                    />
                    <div className="flex flex-1 items-start justify-start w-full">
                      <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[73px] items-center justify-start w-full">
                          <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                              as="h4"
                              variant="h4"
                            >
                              Taylor Wilson
                            </Text>
                            <Text
                              className="font-semibold text-gray_900 text-left w-auto"
                              variant="body3"
                            >
                              Product Manager - Static Mania
                            </Text>
                          </div>
                          <Img
                            src="images/img_shape.svg"
                            className="h-[51px] max-h-[51px] w-auto sm:w-auto"
                            alt="shape"
                          />
                        </div>
                        <Text
                          className="font-semibold leading-[165.00%] max-w-[455px] md:max-w-full text-gray_700 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="flex flex-row gap-[30px] items-start justify-between pl-[770px] pr-[215px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
              <Img
                src="images/img_arrowleft.svg"
                className="h-6 w-6"
                alt="arrowleft"
              />
              <Text
                className="font-bold text-gray_604 text-left w-auto"
                variant="body3"
              >
                Previews
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
              <Text
                className="font-bold text-left text-orange_A700 w-auto"
                variant="body3"
              >
                Next
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="h-6 w-6"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray_900 flex font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                <Text
                  className="flex-1 text-left text-white_A700 tracking-[-0.72px] w-auto"
                  as="h3"
                  variant="h3"
                >
                  News & Consult
                </Text>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px] w-auto"
                  onClick={() => navigate("/blogpage")}
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="mb-[3px] ml-2"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="font-bold text-left text-lg text-orange_A700">
                    Explore All
                  </div>
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                orientation="horizontal"
              >
                {landingPageBlogCardPropList.map((props, index) => (
                  <React.Fragment key={`LandingPageBlogCard${index}`}>
                    <LandingPageBlogCard
                      className="flex flex-1 flex-col h-[487px] md:h-auto items-start justify-start w-full"
                      blogCardButtonText="Read the Article"
                      blogCardButtonIcon="images/img_arrowright_deep_orange_400.svg"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <div className="bg-gray_401 flex items-center justify-center md:px-10 sm:px-5 px-[100px] py-10 rounded-[10px] w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  <Text
                    className="text-center text-gray_900 tracking-[-0.56px] w-auto"
                    as="h4"
                    variant="h4"
                  >
                    For Recent Update, News.
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] max-w-[600px] md:max-w-full not-italic text-center text-gray_900"
                    variant="body3"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Input
                    wrapClassName="bg-gray_52 flex-1 sm:flex-1 px-4 py-[13px] rounded-[10px] w-[78%] sm:w-full"
                    className="font-semibold p-0 placeholder:text-gray_700 text-gray_700 text-left text-sm w-full"
                    type="email"
                    name="input"
                    placeholder="Enter your Email"
                  ></Input>
                  <Button className="bg-gray_900 cursor-pointer font-semibold min-w-[126px] sm:px-5 px-6 py-4 rounded-[10px] text-base text-center text-white_A700 w-auto">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
      {isOpenCreateAccountModal ? (
        <CreateAccountModal
          isOpen={isOpenCreateAccountModal}
          onRequestClose={handleCloseCreateAccountModal}
        />
      ) : null}
    </>
  );
};

export default LandingPagePage;
