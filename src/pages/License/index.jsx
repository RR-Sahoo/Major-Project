import React from "react";

import Header from "components/Header";
import { Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";

const LicensePage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <Header className="bg-white_A700 flex h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex font-manrope items-start justify-start pl-[120px] pr-[324px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.92px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    License
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-auto"
                    variant="body3"
                  >
                    Last updated: January 2020
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                  variant="body3"
                >
                  <>
                    Your content remains yours, which means that you retain any
                    intellectual property rights that you have in your content.
                    For example, you have intellectual property rights in the
                    creative content you make, such as reviews you write. Or you
                    may have the right to share someone else’s creative content
                    if they’ve given you their permission.
                    <br />
                    We need your permission if your intellectual property rights
                    restrict our use of your content. You provide Google with
                    that permission through this license.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-auto"
                    as="h5"
                    variant="h5"
                  >
                    What’s covered
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-auto"
                    variant="body3"
                  >
                    This license covers your content if that content is
                    protected by intellectual property rights.
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-auto"
                    as="h5"
                    variant="h5"
                  >
                    What’s not covered
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] max-w-[996px] md:max-w-full not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    We use cookies to recognize and monitor users, their on-site
                    behavior, and their preferences for accessing their website.
                    These cookies include the IP and time of visits by visitors.
                    Visitors to Relasto that do not want cookies put on their
                    browsers should configure their browsers to reject cookies
                    before using the Relasto website.
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Price Updates
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    <>
                      We will need to update this policy from time to time to
                      ensure that it remains up-to-date with the latest legal
                      requirements and any improvements to our privacy
                      management practices.
                      <br />
                      When we change the policy, we will make sure that we
                      inform you, if any, of such changes. A copy of this
                      policy’s latest version will always be available at this
                      page.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Refund Policy
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] max-w-[996px] md:max-w-full not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    But why fast loading is important? According to Neil Patel,
                    47% of people on the internet expect a web page to load in
                    less than 2 seconds.
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] max-w-[996px] md:max-w-full not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    Static websites are way faster than dynamic ones. As they
                    don’t have a back-end system, there is no time loss due to
                    database connection. Instead, the lightweight, pre-rendered
                    HTML files load incredibly fast.
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-auto"
                    variant="body3"
                  >
                    You may not disclose any information about your order
                    including, but not limited to, Order ID, download
                    connection, etc.
                  </Text>
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

export default LicensePage;
