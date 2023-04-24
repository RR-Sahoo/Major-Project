import React from "react";

import Header from "components/Header";
import { Text, Input, Img, List, Line } from "components";
import { CloseSVG } from "../../assets/images/close";

const FAQPage = () => {
  function handleNavigate1() {
    window.location.href = "https://relasto.com";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[68px] items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <Header className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        <div className="flex font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
            <Text
              className="text-center text-gray_900 tracking-[-0.92px] w-auto"
              as="h2"
              variant="h2"
            >
              Search Property / Anything
            </Text>
            <div className="flex flex-col gap-[25px] items-start justify-start w-full">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                wrapClassName="bg-white_A700 border border-bluegray_100 border-solid flex gap-2 px-[26px] py-3.5 rounded-[10px] w-full"
                className="font-semibold p-0 placeholder:text-gray_600 sm:px-5 text-gray_600 text-left text-lg w-full"
                name="search_One"
                placeholder="Search Property / Anything"
                prefix={
                  <Img
                    src="images/img_search_gray_600.svg"
                    className="mt-auto mb-[3px] cursor-pointer mr-3.5"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    className="cursor-pointer my-auto"
                    onClick={() => setInputvalue("")}
                    fillColor="#6e6e6e"
                    style={{
                      visibility:
                        inputvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={24}
                    width={24}
                    viewBox="0 0 24 24"
                  />
                }
              ></Input>
              <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start sm:px-5 px-[30px] py-7 rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      <>You&#39;re viewing sample results.</>
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="common-pointer font-semibold text-gray_600 text-left w-auto"
                        variant="body4"
                        onClick={handleNavigate1}
                      >
                        https://relasto.com
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[732px] md:max-w-full not-italic text-gray_600 text-left"
                        variant="body5"
                      >
                        Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                        quibusdam autem suscipit culpa perspiciatis.
                        Exercitationem dolorum dolore perferendis praesen…
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-5 grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        Add CMS or Business Hosting and index your site to see
                        real search results!
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          className="font-semibold text-gray_600 text-left w-auto"
                          variant="body4"
                        >
                          https://relasto.com
                        </Text>
                        <Text
                          className="not-italic text-gray_600 text-left w-auto"
                          variant="body5"
                        >
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-bluegray_100 w-full" />
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                        variant="body1"
                      >
                        <>You&#39;re viewing sample results.</>
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          className="font-semibold text-gray_600 text-left w-auto"
                          variant="body4"
                        >
                          https://relasto.com
                        </Text>
                        <Text
                          className="not-italic text-gray_600 text-left w-auto"
                          variant="body5"
                        >
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
