import React, { useState, useEffect } from "react";
import LandingPageCard from "components/LandingPageCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const AgentPropertyListingRent = () => {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://the-home-backend.onrender.com/api/properties/agentProperties/${id}`
      )
      .then((response) => {
        console.log(response.data); // log the response data to the console
        setPropertyData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex items-center justify-center w-full flex-grow">
      <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
        {propertyData
          .filter((property) => property.tag === "rent") // filter out properties with tag of "sell"
          .map((property, index) => (
            <React.Fragment key={`LandingPageCard${index}`}>
              <LandingPageCard
                className="flex flex-1 flex-col h-full items-start justify-start w-full"
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
  );
};

export default AgentPropertyListingRent;
