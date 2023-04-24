import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPageHeader from "components/LandingPageHeader";
import { Text, Input, Img, SelectBox, Button } from "components";
import AgentProfileCard from "components/AgentProfileCard";
import LandingPageFooter from "components/LandingPageFooter";

const AgentListPage = () => {
  const [agentProfileCardPropList, setAgentProfileCardPropList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const itemsPerPage = 12;
  const totalPages = Math.ceil(agentProfileCardPropList.length / itemsPerPage);
  const [filteredAgents, setFilteredAgents] = useState(
    agentProfileCardPropList
  );
  const [selectedOption, setSelectedOption] = useState(null);
  const options1 = [
    { value: "None", label: "None" },
    { value: "Low to High", label: "Low to High" },
    { value: "High to Low", label: "High to Low" },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://the-home-backend.onrender.com/api/agents/all-agents"
      );
      const data = response.data;
      setAgentProfileCardPropList(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  function handleClick(page) {
    setCurrentPage(page);
  }

  const matchesSearchText = (agent) => {
    if (searchText.trim() === "") {
      return true;
    }
    const nameMatch = agent.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const addressMatch = agent.address
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return nameMatch || addressMatch;
  };

  const sortByReview = (a, b) => {
    if (selectedOption === "Low to High") {
      return a.review - b.review;
    } else if (selectedOption?.value === "High to Low") {
      return b.review - a.review;
    } else {
      return 0;
    }
  };
  console.log(selectedOption);

  const SearchedAgents = agentProfileCardPropList.filter(matchesSearchText);
  const getPaginatedData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return SearchedAgents.slice(start, end);
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
        <div className="flex flex-col gap-14 items-start justify-start w-full">
          <LandingPageHeader className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
              <Text
                className="text-gray_900 text-left tracking-[-0.72px] w-auto"
                as="h3"
                variant="h3"
              >
                Some Nearby Good Agents
              </Text>
              <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-1 items-start justify-start px-4 py-3.5 rounded-[10px] w-full">
                  <Input
                    wrapClassName="flex w-full"
                    className="font-semibold p-0 placeholder:text-gray_600 text-gray_600 text-left text-lg w-full"
                    name="frame1000001612"
                    placeholder="Enter your address"
                    suffix={
                      <Img
                        src="images/img_search_gray_600.svg"
                        className="mt-auto mb-[3px] ml-3"
                        alt="search"
                      />
                    }
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                  ></Input>
                </div>
                <SelectBox
                  className="bg-white_A700 border border-bluegray_100 border-solid md:flex-1 font-bold pl-5 pr-4 py-[18px] rounded-[10px] text-gray_600 text-left text-lg w-[12%] md:w-full"
                  placeholderClassName="text-gray_600"
                  name="dropdownlarge"
                  placeholder="Review"
                  options={options1}
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_600_24x24.svg"
                      className="h-6 w-6"
                      alt="arrow_down"
                    />
                  }
                  value={selectedOption}
                  onChange={setSelectedOption}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-manrope md:gap-10 gap-[60px] items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex items-center justify-center max-w-[1200px] mx-auto w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                {(selectedOption && selectedOption.value !== "None"
                  ? SearchedAgents
                  : getPaginatedData()
                )
                  .filter(matchesSearchText)
                  .sort(sortByReview)
                  .map((props, index) => (
                    <React.Fragment key={`AgentProfileCard${index}`}>
                      <AgentProfileCard
                        className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full"
                        agentName={props.name}
                        agentReview={props.review}
                        agentProfilePic={props.profilePic}
                        agentId={props._id}
                        agentProfileViewButton="View Profile"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
              </div>
            </div>

            <div className="flex sm:flex-col flex-row gap-5 items-center justify-between max-w-[1200px] mx-auto w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between max-w-[1200px] mx-auto w-full">
                <div className="flex flex-row gap-[5px] items-start justify-start self-stretch w-auto">
                  {pageButtons}
                </div>
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
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
      {console.log("page changed")}
    </>
  );
};

export default AgentListPage;
