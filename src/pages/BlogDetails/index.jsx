import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Img, List, ReactTable } from "components";
import { createColumnHelper } from "@tanstack/react-table";
import BlogPageColumnactive from "components/BlogPageColumnactive";
import LandingPageFooter from "components/LandingPageFooter";
import LoginHeader from "components/LoginHeader";

const BlogDetailsPage = () => {
  const tableData = React.useRef([
    {
      fullname: "Zakir Hossen",
      title: "UI, UX Designer",
      emailaddress: "uxdesigner@gmail.com",
      phonenumber: "+88 222 5554 444",
    },
    {
      fullname: "Zakir Hossen",
      title: "UI, UX Designer",
      emailaddress: "uxdesigner@gmail.com",
      phonenumber: "+88 222 5554 444",
    },
    {
      fullname: "Zakir Hossen",
      title: "UI, UX Designer",
      emailaddress: "uxdesigner@gmail.com",
      phonenumber: "+88 222 5554 444",
    },
    {
      fullname: "Zakir Hossen",
      title: "UI, UX Designer",
      emailaddress: "uxdesigner@gmail.com",
      phonenumber: "+88 222 5554 444",
    },
    {
      fullname: "Zakir Hossen",
      title: "UI, UX Designer",
      emailaddress: "uxdesigner@gmail.com",
      phonenumber: "+88 222 5554 444",
    },
  ]);
  const columnHelper = createColumnHelper();
  const column = [
    columnHelper.accessor("fullname", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[9px] pt-[17px] text-gray_600 text-left"
          as="p"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="flex-1 min-w-[234px] py-2.5 text-gray_900 text-left"
          as="p"
          variant="body7"
        >
          Full Name
        </Text>
      ),
    }),
    columnHelper.accessor("title", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[7px] pt-[19px] text-gray_600 text-left"
          as="p"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="flex-1 min-w-[234px] py-2.5 text-gray_900 text-left"
          as="p"
          variant="body7"
        >
          Title
        </Text>
      ),
    }),
    columnHelper.accessor("emailaddress", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[7px] pt-[19px] text-gray_600 text-left"
          as="p"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="flex-1 min-w-[234px] py-2.5 text-gray_900 text-left"
          as="p"
          variant="body7"
        >
          Email Address
        </Text>
      ),
    }),
    columnHelper.accessor("phonenumber", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[9px] pt-[17px] text-gray_600 text-left"
          as="p"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="flex-1 min-w-[214px] py-2.5 text-gray_900 text-left"
          as="p"
          variant="body7"
        >
          Phone Number
        </Text>
      ),
    }),
  ];

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[111px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <LoginHeader />
        <div className="flex font-manrope items-start justify-start pl-[120px] pr-[324px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <Text
              className="text-gray_900 text-left tracking-[-0.72px] w-auto"
              as="h3"
              variant="h3"
            >
              10 Delightful Dining Room Decor Trends for Spring
            </Text>
            <div className="flex flex-col md:gap-10 gap-[84px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-4 items-end justify-between w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle5618_550x996.png"
                    className="h-[550px] sm:h-auto object-cover rounded-[10px] w-full"
                    alt="rectangle5618"
                  />
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    <>
                      What a time we are living in! A lot of things are coming
                      back, bringing back nostalgia. Wondering why I am talking
                      about nostalgia and all? Especially when it is supposed to
                      be an article on websites! Well, because some old famous
                      website technology is coming back too. Yes, I am talking
                      about static websites.
                      <br />
                      Long ago, almost all websites were used to be static sites
                      during the early days of the internet. Then dynamic sites
                      came and blew the space. A lot of websites shifted to it.
                      Obviously dynamic sites have their advantages. But static
                      sites are making a comeback. And it’s coming stronger than
                      before. In this article, you will cover the basics of
                      static websites like what is a static website, what are
                      the advantages, and when you should use a static website.
                      Let’s kick things off.
                    </>
                  </Text>
                </div>
                <div className="flex md:flex-1 items-center justify-start w-[11%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
                    <Img
                      src="images/img_facebook.svg"
                      className="h-8 w-8"
                      alt="facebook"
                    />
                    <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                      <Img
                        src="images/img_volume.svg"
                        className="h-8 w-8"
                        alt="volume"
                      />
                      <div className="flex items-center justify-start w-[71%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[25px] items-center justify-start self-stretch w-auto"
                          style={{
                            backgroundImage:
                              "url('images/img_frame1000001658.svg')",
                          }}
                        >
                          <Text
                            className="text-gray_900 text-left w-auto"
                            variant="body7"
                          >
                            Share this
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_twitter_bluegray_100.svg"
                      className="h-8 w-8"
                      alt="twitter"
                    />
                    <Img
                      src="images/img_reddit.svg"
                      className="h-8 w-8"
                      alt="reddit"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Blockquotes
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-auto"
                    variant="body3"
                  >
                    <>
                      Blockquotes can be nested. Add a &gt;&gt; in front of the
                      paragraph you want to nest.
                    </>
                  </Text>
                </div>
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="font-normal leading-[180.00%] max-w-[936px] md:max-w-full not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        Static websites are way faster than dynamic ones. As
                        they don’t have a back-end system, there is no time loss
                        due to database connection. Instead, the lightweight,
                        pre-rendered HTML files load incredibly fast.
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] max-w-[936px] md:max-w-full not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        But why fast loading is important? According to Neil
                        Patel, 47% of people on the internet expect a web page
                        to load in less than 2 seconds.
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="bg-white_A700 border border-bluegray_100 border-solid flex-col gap-10 grid items-start md:px-10 sm:px-5 px-[51px] py-[39px] rounded-[10px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-5 items-start justify-start my-0 w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="font-normal leading-[180.00%] max-w-[894px] md:max-w-full not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        Static websites are way faster than dynamic ones. As
                        they don’t have a back-end system, there is no time loss
                        due to database connection. Instead, the lightweight,
                        pre-rendered HTML files load incredibly fast.
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] max-w-[894px] md:max-w-full not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        But why fast loading is important? According to Neil
                        Patel, 47% of people on the internet expect a web page
                        to load in less than 2 seconds.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-5 items-start justify-start my-0 w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-auto"
                      variant="body1"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="font-normal not-italic text-gray_600 text-left w-auto"
                        variant="body3"
                      >
                        Dynamic site CMS like WordPress has a greater
                        dependency. They require an operating system like Linux
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] max-w-[894px] md:max-w-full not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        Unlike dynamic websites, you don’t have to depend on
                        plugins to add functionalities to your static site.
                        Instead, you can create or include features directly
                        into files. Or, you can insert widgets using a snippet.
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Images
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] max-w-[996px] md:max-w-full not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    Being a fast loading and more secure website, you can choose
                    a static website for beginner to medium level workload.
                    Hopefully, you have got the answer to what is a static
                    website and why should you use it. Decide carefully does
                    static sites are enough for your need.
                  </Text>
                </div>
                <Img
                  src="images/img_rectangle5619_532x996.png"
                  className="h-[532px] md:h-auto object-cover rounded-[10px] w-full"
                  alt="rectangle5619"
                />
              </div>
              <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Lists
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] max-w-[996px] md:max-w-full not-italic text-gray_600 text-left"
                      variant="body3"
                    >
                      Being a fast loading and more secure website, you can
                      choose a static website for beginner to medium level
                      workload. Hopefully, you have got the answer to what is a
                      static website and why should you use it. Decide carefully
                      does static sites are enough for your need.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray_600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-auto"
                        variant="body3"
                      >
                        Performance: Faster Loading Speed
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray_600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-auto"
                        variant="body3"
                      >
                        Less Server-side Dependencies
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray_600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-auto"
                        variant="body3"
                      >
                        Flexibility: More Freedom to Develop Websites
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray_600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-auto"
                        variant="body3"
                      >
                        Security: A More Secure Website
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray_600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-auto"
                        variant="body3"
                      >
                        Scalability: Capability to Handle Massive Traffic
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray_600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-auto"
                        variant="body3"
                      >
                        Hosting and Pricing: Saves Your Budget For Good
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Text
                      className="font-bold h-[25px] text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      01.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[11px] items-center justify-start w-full">
                    <Text
                      className="font-bold text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      02.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      Less Server-side Dependencies
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                    <Text
                      className="font-bold text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      03.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      Flexibility: More Freedom to Develop Websites
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Text
                      className="font-bold text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      04.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      Security: A More Secure Website
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                    <Text
                      className="font-bold text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      05.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      Scalability: Capability to Handle Massive Traffic
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-start w-full">
                    <Text
                      className="font-bold text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      06.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-auto"
                      variant="body3"
                    >
                      Hosting and Pricing: Saves Your Budget For Good
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                  as="h4"
                  variant="h4"
                >
                  Link
                </Text>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                  variant="body3"
                >
                  <>
                    Yes, a static website may have all its benefits, but is it
                    suitable for you? That’s a big question. It depends on why
                    you are going to build a website, what purpose it will
                    serve. That’s why you must when you should use a static
                    website.
                    <br />
                    The followings are the common applications where using the
                    static website is the best choice. - Blog sites- - Small
                    business websites - Websites Under-Development - Personal
                    Portfolio sites - Websites that contain basic information
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Tables
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] max-w-[996px] md:max-w-full not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    The followings are the common applications where using the
                    static website is the best choice. - Blog sites- - Small
                    business websites.
                  </Text>
                </div>
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start px-10 sm:px-5 py-[50px] rounded-[10px] w-full">
                  <div className="overflow-auto w-full">
                    <ReactTable
                      columns={column}
                      data={tableData.current}
                      rowClass={""}
                      headerClass=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[-0.48px] w-auto"
                  as="h5"
                  variant="h5"
                >
                  Writen by
                </Text>
                <div className="flex items-center justify-between md:pr-10 sm:pr-5 pr-[568px] w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-start max-w-[836px] w-full">
                    <Img
                      src="images/img_profilepicture.png"
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      alt="profilepicture"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-[165px]">
                      <Text
                        className="font-bold text-gray_900 text-left tracking-[-0.48px] w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Kristin Watson
                      </Text>
                      <Text
                        className="font-semibold text-gray_600 text-left w-auto"
                        variant="body4"
                      >
                        Co-founder and CDO
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start self-stretch w-auto">
                      <div className="bg-bluegray_100 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-auto"
                        variant="body4"
                      >
                        July 20, 2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1200px] mx-auto w-full">
            <Text
              className="text-gray_900 text-left tracking-[-0.72px] w-auto"
              as="h3"
              variant="h3"
            >
              Recent News
            </Text>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              {new Array(3).fill({}).map((props, index) => (
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
            </List>
          </div>
        </div>
        <LandingPageFooter className="bg-white_A700 flex items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default BlogDetailsPage;
