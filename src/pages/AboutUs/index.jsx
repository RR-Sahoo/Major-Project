import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Img, List, Button, Input } from "components";
import LandingPageNumberCount from "components/LandingPageNumberCount";
import LandingPageBlogCard from "components/LandingPageBlogCard";
import LandingPageFooter from "components/LandingPageFooter";
import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {
  const navigate = useNavigate();

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
        <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        <div className="flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="leading-[140.00%] text-center text-gray_900 tracking-[-1.08px]"
                as="h1"
                variant="h1"
              >
                <>
                  Reimagining real estate to <br />
                  make it easier to unlock.
                </>
              </Text>
              <Text
                className="font-normal leading-[180.00%] max-w-[1200px] md:max-w-full not-italic text-center text-gray_700"
                variant="body3"
              >
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble.
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <Img
                  src="images/img_rectangle5592.png"
                  className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] w-auto sm:w-auto md:w-auto"
                  alt="rectangle5592"
                />
                <Img
                  src="images/img_rectangle5593.png"
                  className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] w-auto sm:w-auto md:w-auto"
                  alt="rectangle5593"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <Img
                  src="images/img_rectangle5595.png"
                  className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] w-auto sm:w-auto md:w-auto"
                  alt="rectangle5595"
                />
                <Img
                  src="images/img_rectangle5594.png"
                  className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] w-auto sm:w-auto md:w-auto"
                  alt="rectangle5594"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_50 flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] py-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1200px] mx-auto w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[73%] md:w-full"
              orientation="horizontal"
            >
              {landingPageNumberCountPropList.map((props, index) => (
                <React.Fragment key={`LandingPageNumberCount${index}`}>
                  <LandingPageNumberCount
                    className="flex flex-col items-start justify-start w-[225px] sm:w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <LandingPageNumberCount
              className="flex sm:flex-1 flex-col items-start justify-start w-[225px] sm:w-full"
              number="600+"
              desc="Reagular Clients"
            />
          </div>
        </div>
        <div className="flex font-manrope items-center justify-center max-w-[1440px] pl-[120px] pr-[173px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start max-w-[1147px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-auto"
                  as="h3"
                  variant="h3"
                >
                  A note from our founders.
                </Text>
                <Text
                  className="font-normal leading-[180.00%] max-w-[531px] md:max-w-full not-italic text-gray_700 text-left"
                  variant="body3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour,
                </Text>
              </div>
              <List
                className="flex-col gap-8 grid items-start w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                  <Text
                    className="border-2 border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-[17px] text-center text-gray_900 tracking-[-0.40px] w-[35px]"
                    variant="body1"
                  >
                    1
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.44px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      It all started in 1995
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] max-w-[470px] md:max-w-full not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                  <Text
                    className="border-2 border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-[17px] text-center text-gray_900 tracking-[-0.40px] w-[35px]"
                    variant="body1"
                  >
                    2
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.44px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Donate launches in 2007
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] max-w-[470px] md:max-w-full not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                  <Text
                    className="border-2 border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-[17px] text-center text-gray_900 tracking-[-0.40px] w-[35px]"
                    variant="body1"
                  >
                    3
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.44px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Relasto holds its initial public offering in 2008
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] max-w-[470px] md:max-w-full not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Img
              src="images/img_rectangle20_589x531.png"
              className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] w-auto sm:w-auto md:w-auto"
              alt="rectangleTwenty"
            />
          </div>
        </div>
        <div className="flex font-manrope items-center justify-center max-w-[1440px] pl-[170px] pr-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[158px] items-center justify-between max-w-[1150px] mx-auto w-full">
            <Img
              src="images/img_rectangle20_589x496.png"
              className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] w-auto sm:w-auto md:w-auto"
              alt="rectangleTwenty_One"
            />
            <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-auto"
                  as="h3"
                  variant="h3"
                >
                  Our vision is simple.
                </Text>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_700 text-left"
                  variant="body3"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, On the other hand, we
                    denounce with righteous indignation and dislike men who are
                    so beguiled and demoralized by the charms of pleasure of the
                    moment.
                    <br />
                    In a free hour, On the other hand, we denounce with
                    righteous indignation and dislike men .
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                  variant="body1"
                >
                  Kausar Pial
                </Text>
                <Text
                  className="font-semibold text-gray_700 text-left w-auto"
                  variant="body3"
                >
                  CEO at Static Mania
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1200px] mx-auto w-full">
            <Text
              className="text-center text-gray_900 tracking-[-0.72px] w-auto"
              as="h3"
              variant="h3"
            >
              Relasto Team members
            </Text>
            <div className="flex items-start justify-start w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5596.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5596"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Kausar Pial
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      CEO
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5597.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5597"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Floyd Miles
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      President of Sales
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5598.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5598"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Darlene Robertson
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5599.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5599"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Guy Hawkins
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5600.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5600"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Jerome Bell
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5601.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5601"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Ralph Edwards
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5602.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5602"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Arlene McCoy
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5603.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5603"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Devon Lane
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5604.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5604"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Courtney Henry
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5605.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5605"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Bessie Cooper
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5606.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5606"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5607.png"
                    className="h-[282px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5607"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-auto"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
              </div>
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
                    className="text-gray_900 text-left tracking-[-0.56px] w-auto"
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
    </>
  );
};

export default AboutUsPage;
