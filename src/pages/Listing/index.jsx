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
import { ArrowIcon } from "components/Icones";
import { Link } from "react-router-dom";
import LoginHeader from "components/LoginHeader";

const ListingPage = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://the-home-backend.onrender.com/api/properties/all-properties"
      )
      .then((response) => {
        setPropertyData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredProperties = propertyData.filter((property) =>
    property.Location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function property(order) {
    let sortedData;
    if (order === "lowToHigh") {
      sortedData = [...propertyData].sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedData = [...propertyData].sort((a, b) => b.price - a.price);
    } else {
      sortedData = propertyData;
    }
    setPropertyData(sortedData);
  }

  function sortedProperties(order) {
    let sortedData;
    if (order === "ascending") {
      sortedData = [...propertyData].sort((a, b) =>
        a.Location.localeCompare(b.Location)
      );
    } else if (order === "descending") {
      sortedData = [...propertyData].sort((a, b) =>
        b.Location.localeCompare(a.Location)
      );
    } else {
      sortedData = propertyData;
    }
    setPropertyData(sortedData);
  }
  function sortedBedrooms(order) {
    let sortedData;
    if (order === "lowToHigh") {
      sortedData = [...propertyData].sort((a, b) => a.Bedrooms - b.Bedrooms);
    } else if (order === "highToLow") {
      sortedData = [...propertyData].sort((a, b) => b.Bedrooms - a.Bedrooms);
    } else {
      sortedData = propertyData;
    }
    setPropertyData(sortedData);
  }
  function sortedBathrooms(order) {
    let sortedData;
    if (order === "lowToHigh") {
      sortedData = [...propertyData].sort((a, b) => a.Bathrooms - b.Bathrooms);
    } else if (order === "highToLow") {
      sortedData = [...propertyData].sort((a, b) => b.Bathrooms - a.Bathrooms);
    } else {
      sortedData = propertyData;
    }
    setPropertyData(sortedData);
  }
  function sortedPropertySize(order) {
    let sortedData;
    if (order === "lowToHigh") {
      sortedData = [...propertyData].sort(
        (a, b) => a.property_size - b.property_size
      );
    } else if (order === "highToLow") {
      sortedData = [...propertyData].sort(
        (a, b) => b.property_size - a.property_size
      );
    } else {
      sortedData = propertyData;
    }
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
          <LoginHeader />
          <ListingHeader handleSearchTermChange={handleSearchTermChange} />
          <div className="flex flex-row gap-8 my-4">
            <div>
              <form>
                <select
                  placeholder="Price"
                  className="font-manrope uppercase text-sm font-medium"
                  onChange={(e) => property(e.target.value)}
                >
                  <option>Price</option>
                  <option value="lowToHigh">low to high</option>
                  <option value="highToLow">high to low</option>
                </select>
              </form>
            </div>
            <div>
              <form>
                <select
                  placeholder="Location"
                  className="font-manrope uppercase text-sm font-medium"
                  onChange={(e) => sortedProperties(e.target.value)}
                >
                  <option>Location</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </form>
            </div>
            <div>
              <form>
                <select
                  placeholder="Bedrooms"
                  className="font-manrope uppercase text-sm font-medium"
                  onChange={(e) => sortedBedrooms(e.target.value)}
                >
                  <option>Bedrooms</option>
                  <option value="lowToHigh">low to high</option>
                  <option value="highToLow">high to low</option>
                </select>
              </form>
            </div>
            <div>
              <form>
                <select
                  placeholder="Bathrooms"
                  className="font-manrope uppercase text-sm font-medium"
                  onChange={(e) => sortedBathrooms(e.target.value)}
                >
                  <option>Bathrooms</option>
                  <option value="lowToHigh">low to high</option>
                  <option value="highToLow">high to low</option>
                </select>
              </form>
            </div>
            <div>
              <form>
                <select
                  placeholder="Size"
                  className="font-manrope uppercase text-sm font-medium"
                  onChange={(e) => sortedPropertySize(e.target.value)}
                >
                  <option>Size</option>
                  <option value="lowToHigh">low to high</option>
                  <option value="highToLow">high to low</option>
                </select>
              </form>
            </div>
          </div>
          {/* Conditional rendering of loader */}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
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
                            id={property._id}
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
          )}
        </div>
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default ListingPage;
