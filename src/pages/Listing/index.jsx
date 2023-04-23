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
import ListingHeader from "./Components/ListingHeader";

const ListingPage = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

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

  function property() {
    const sortedData = [...propertyData].sort((a, b) => a.price - b.price);
    setPropertyData(sortedData);
  }

  function sortedProperties() {
    const sortedData = [...propertyData].sort((a, b) => {
      if (a.Location < b.Location) return -1;
      if (a.Location > b.Location) return 1;
      return 0;
    });
    setPropertyData(sortedData);
  }
  function sortedBedrooms() {
    const sortedData = [...propertyData].sort(
      (a, b) => b.Bedrooms - a.Bedrooms
    );
    setPropertyData(sortedData);
  }
  function sortedBathrooms() {
    const sortedData = [...propertyData].sort(
      (a, b) => b.Bathrooms - a.Bathrooms
    );
    setPropertyData(sortedData);
  }
  function sortedPropertySize() {
    const sortedData = [...propertyData].sort(
      (a, b) => a.property_size - b.property_size
    );
    setPropertyData(sortedData);
  }
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const getPaginatedData = () => {
    const filteredData = filteredProperties.filter((property) =>
      property.Location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData.slice(start, end);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    const isActive = currentPage === i;
    pageButtons.push(
      <Button
        key={i}
        className={`border ${
          isActive ? "border-gray_700" : "border-bluegray_102"
        } border-solid cursor-pointer font-semibold h-12 px-[18px] py-4 rounded-[10px] text-base text-center text-gray_900 w-12`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </Button>
    );
  }

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center w-full">
          <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <ListingHeader handleSearchTermChange={handleSearchTermChange} />
          <div className="flex flex-row gap-2 my-4">
            <button
              onClick={property}
              className="bg-orange_A700 hover:bg-orange_A700 text-white font-normal py-2 px-4 rounded uppercase  w-1/2"
            >
              price
            </button>
            <button
              onClick={sortedProperties}
              className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded uppercase w-1/2"
            >
              Location
            </button>
            <button
              onClick={sortedBedrooms}
              className="bg-orange_A700 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded uppercase"
            >
              Bedrooms
            </button>
            <button
              onClick={sortedBathrooms}
              className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded uppercase w-1/2"
            >
              Bathrooms
            </button>
            <button
              onClick={sortedPropertySize}
              className="bg-orange_A700 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded uppercase"
            >
              Area
            </button>
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
                    {getPaginatedData().map((property, index) => (
                      <React.Fragment key={`LandingPageCard${index}`}>
                        <LandingPageCard
                          className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full"
                          address={property.Location}
                          bedroom={`${property.Bedrooms} Bed Room`}
                          bathroom={`${property.Bathrooms} Bath`}
                          sqftcounter={`${property.property_size} sqft`}
                          tag={property.tag}
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
                    onClick={() => handlePageChange(currentPage + 1)}
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
