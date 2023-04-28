import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Input, Img, SelectBox, Button } from "components";
import BlogPageColumnactive from "components/BlogPageColumnactive";
import LandingPageFooter from "components/LandingPageFooter";
import LoginHeader from "components/LoginHeader";

const BlogPagePage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start w-full">
          <LoginHeader />
          <div className="flex font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1200px] mx-auto w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-auto"
                  as="h3"
                  variant="h3"
                >
                  Real Estate News & Blogs
                </Text>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {new Array(9).fill({}).map((props, index) => (
                    <React.Fragment key={`BlogPageColumnactive${index}`}>
                      <BlogPageColumnactive
                        className="flex flex-1 flex-col items-start justify-start w-full"
                        business="Business"
                        p10delightfuldinOne="10 Delightful Dining Room Decor Trends for Spring"
                        july202022="July 20, 2022"
                        time="7 min read"
                        active="Continue Reading"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default BlogPagePage;
