import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LandingPageHeader from "components/LandingPageHeader";
import { Img } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import AgentProfileHeader from "./Components/AgentProfileHeader";
import AgentTabSection from "./Components/AgentTabSection";
import coverImage from "../../assets/images/img_coverimage.png";
import LoginHeader from "components/LoginHeader";

const AgentProfilePage = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://the-home-backend.onrender.com/api/agents/${id}`
        );
        setAgent(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-center mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <LoginHeader />
          <div className="flex flex-col font-manrope md:px-5 relative w-full">
            <div className="flex flex-1 items-center justify-start mx-auto w-full">
              <Img
                src={coverImage}
                className="h-[250px] sm:h-auto object-cover w-full"
                alt="coverimage"
              />
            </div>
            {agent && (
              <div className="flex flex-1 flex-col gap-[58px] items-center justify-start mt-[-46px] mx-auto w-full z-[1]">
                <AgentProfileHeader agent={agent} />
                <section className="h-[1100px] w-full">
                  <AgentTabSection agent={agent} />
                </section>
              </div>
            )}
          </div>
        </div>
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default AgentProfilePage;
