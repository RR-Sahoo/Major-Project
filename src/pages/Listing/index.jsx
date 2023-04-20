import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Listing.css";
import LandingPageHeader from "components/LandingPageHeader";
import {
  Text,
  Input,
  Img,
  SelectBox,
  Button,
  GoogleMap,
  List,
} from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";

const ListingPage = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const totalPages = 5;
  useEffect(() => {
    axios
      .get(
        "https://the-home-backend.onrender.com/api/properties/all-properties"
      )
      .then((response) => setPropertyData(response.data))
      .catch((error) => console.log(error));
  }, []);
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredProperties = propertyData.filter((property) =>
    property.Location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    const isActive = currentPage === i;
    pageButtons.push(
      <Button
        key={i}
        className={`border ${
          isActive ? "border-gray_700" : "border-bluegray_102"
        } border-solid cursor-pointer font-semibold h-12 px-[18px] py-4 rounded-[10px] text-base text-center text-gray_900 w-12`}
        onClick={() => handleClick(i)}
      >
        {i}
      </Button>
    );
  }
  function handleClick(page) {
    setCurrentPage(page);
  }

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center w-full">
          <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
              <Text
                className="text-gray_900 text-left tracking-[-0.72px] w-auto"
                as="h3"
                variant="h3"
              >
                Find Property
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                  <div
                    className="bg-white_A700 border border-bluegray_100 border-solid flex flex-1 h-[60px] md:h-auto items-start justify-start px-4 py-3.5 rounded-[10px] w-full"
                    style={{}}
                  >
                    <Input
                      wrapClassName="flex w-auto sm:w-full listing-search"
                      className="font-semibold p-0 placeholder:text-gray_700 self-stretch text-gray_700 text-left text-lg w-full"
                      name="frame1000001565"
                      placeholder="Enter your address"
                      suffix={
                        <Img
                          src="images/img_search_gray_700.svg"
                          className="mt-auto mb-[3px] ml-3"
                          alt="search"
                        />
                      }
                      onChange={handleSearchTermChange}
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 items-start justify-start self-stretch w-auto sm:w-full">
                    <SelectBox
                      className="bg-white_A700 border border-bluegray_100 border-solid font-bold px-4 py-[18px] rounded-[10px] text-gray_700 text-left text-lg w-full"
                      placeholderClassName="text-gray_700"
                      name="dropdownlarge"
                      placeholder="Buy"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_700.svg"
                          className="h-6 w-6"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <SelectBox
                    className="bg-white_A700 border border-bluegray_100 border-solid md:flex-1 font-bold px-4 py-[18px] rounded-[10px] text-gray_700 text-left text-lg w-[18%] md:w-full"
                    placeholderClassName="text-gray_700"
                    name="price"
                    placeholder="$15000 - $18000"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_700.svg"
                        className="h-6 w-6"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <SelectBox
                    className="bg-white_A700 border border-bluegray_100 border-solid md:flex-1 font-bold px-4 py-[18px] rounded-[10px] text-gray_700 text-left text-lg w-[11%] md:w-full"
                    placeholderClassName="text-gray_700"
                    name="dropdownlarge_One"
                    placeholder="Bed - 3"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_700.svg"
                        className="h-6 w-6"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Button
                    className="bg-white_A700 border border-bluegray_100 border-solid cursor-pointer flex items-center justify-center min-w-[113px] px-4 py-[18px] rounded-[10px] w-auto"
                    rightIcon={
                      <Img
                        src="images/img_plus_gray_700.svg"
                        className="mb-px ml-3"
                        alt="plus"
                      />
                    }
                  >
                    <div className="font-bold text-gray_700 text-left text-lg">
                      More
                    </div>
                  </Button>
                  <Button
                    className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[124px] px-4 py-5 rounded-[10px] w-auto"
                    rightIcon={
                      <Img
                        src="images/img_search_white_a700.svg"
                        className="mt-px mb-[3px] ml-2.5"
                        alt="search"
                      />
                    }
                  >
                    <div className="font-bold text-left text-lg text-white_A700">
                      Search
                    </div>
                  </Button>
                </div>
                <div className="flex flex-row flex-wrap gap-2.5 items-start justify-start max-w-[1200px] w-full">
                  <Button
                    className="border border-bluegray_101 border-solid cursor-pointer flex items-center justify-center px-3.5 py-[7px] rounded-[10px] w-[145px]"
                    rightIcon={
                      <Img
                        src="images/img_close.svg"
                        className="mt-0.5 mb-px ml-2"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray_700 text-left text-sm">
                      Bathrooms 2+
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[243px] px-3.5 py-[7px] rounded-[10px] w-auto"
                    rightIcon={
                      <Img
                        src="images/img_close.svg"
                        className="mt-px mb-[3px] ml-2"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray_700 text-left text-sm">
                      Square Feet 750 - 2000 sq. ft
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[151px] px-3.5 py-[7px] rounded-[10px] w-auto"
                    rightIcon={
                      <Img
                        src="images/img_close.svg"
                        className="mt-0.5 mb-px ml-2"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray_700 text-left text-sm">
                      Year Built 5 - 15
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[168px] px-3.5 py-[7px] rounded-[10px] w-auto"
                    rightIcon={
                      <Img
                        src="images/img_close.svg"
                        className="mt-px mb-[3px] ml-2"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray_900 text-left text-sm">
                      For Sale By Agent
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[174px] px-3.5 py-[7px] rounded-[10px] w-auto"
                    rightIcon={
                      <Img
                        src="images/img_close.svg"
                        className="mt-0.5 mb-px ml-2"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray_900 text-left text-sm">
                      New Construction
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1200px] mx-auto w-full">
              <div className="h-[511px] relative w-[32%] md:w-full">
                <div className="h-[511px] m-auto w-full">
                  <GoogleMap
                    className="h-[511px] m-auto rounded-[10px] w-full"
                    showMarker={false}
                  ></GoogleMap>
                  <Img
                    src="images/img_group1000001533.svg"
                    className="absolute h-[427px] inset-y-[0] my-auto right-[6%] w-auto"
                    alt="group1000001533"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                <div className="flex items-start justify-start w-full">
                  <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    {filteredProperties.map((property, index) => (
                      <React.Fragment key={`LandingPageCard${index}`}>
                        <LandingPageCard
                          className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full"
                          address={property.Location}
                          bedroom={`${property.Bedrooms} Bed Room`}
                          bathroom={`${property.Bathrooms} Bath`}
                          sqftcounter={`${property.property_size} sqft`}
                          p1bath="Family"
                          viewDetails="View Details"
                          price={`₹${property.price}`}
                          image={property.image}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                  <div className="flex flex-row gap-[5px] items-start justify-start self-stretch w-auto">
                    {pageButtons}
                  </div>
                  <Button
                    className="border border-bluegray_102 border-solid cursor-pointer flex items-center justify-center min-w-[134px] px-[18px] py-4 rounded-[10px] w-auto"
                    disabled={currentPage === totalPages}
                    onClick={() => handleClick(currentPage + 1)}
                    rightIcon={
                      <Img
                        src="images/img_arrowright_gray_900.svg"
                        className="mt-px mb-[5px] ml-1"
                        alt="arrow_right"
                      />
                    }
                  >
                    <div className="font-semibold text-base text-gray_900 text-left">
                      Next Page
                    </div>
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

export default ListingPage;
