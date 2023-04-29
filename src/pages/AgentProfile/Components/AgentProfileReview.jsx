import React, { useState, useEffect } from "react";
import { Img, Text, Button, Line, List, SelectBox } from "components";
import { XIcon } from "@heroicons/react/outline";
import addIcon from "../../../assets/images/img_plus_white_a700.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

const AgentProfileReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [review, setReview] = useState("");
  const [reviewData, setReviewData] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://the-home-backend.onrender.com/api/review/",
        {
          message: review,
          agent: id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://the-home-backend.onrender.com/api/review/${id}`)
      .then((response) => {
        console.log(response.data); // log the response data to the console
        setReviewData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
      <div className="bg-white_A700 border border-bluegray_100 border-solid flex items-start justify-start max-w-[1200px] mx-auto md:px-5 py-[30px] rounded-[10px] w-full">
        <div className="flex items-start justify-start w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between md:px-10 sm:px-5 px-[42px] w-full">
                <Text
                  className="text-gray_900 text-left tracking-[-0.56px] w-auto"
                  as="h4"
                  variant="h4"
                >
                  Clients Review
                </Text>
                <div className="relative">
                  {/* Overlay */}
                  <div
                    className={`fixed top-0 left-0 w-full h-full bg-black opacity-30 z-50 ${
                      isOpen ? "block" : "hidden"
                    }`}
                    onClick={() => setIsOpen(false)}
                  />

                  {/* Modal */}
                  <div
                    className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 z-50 ${
                      isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    } transition duration-300 ease-in-out w-96`}
                  >
                    <div className="p-6">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="text-gray-500 hover:text-gray-700"
                          onClick={() => setIsOpen(false)}
                        >
                          <XIcon className="h-5 w-5" />
                        </button>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label
                            htmlFor="review"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Write your review:
                          </label>
                          <textarea
                            id="review"
                            name="review"
                            rows="5"
                            placeholder="Type your review here..."
                            className="w-full border border-gray-400 p-2 rounded"
                            value={review}
                            onChange={(event) => setReview(event.target.value)}
                          ></textarea>
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="bg-gray-900 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => setIsOpen(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Write a review button */}
                  <Button
                    className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[190px] px-4 py-5 rounded-[10px] w-auto hover:bg-gray-800"
                    rightIcon={
                      <Img
                        src={addIcon}
                        className="mt-px mb-[3px] ml-2.5"
                        alt="plus"
                      />
                    }
                    onClick={() => setIsOpen(true)}
                  >
                    <div className="font-bold text-left text-lg text-white_A700">
                      Write a Review
                    </div>
                  </Button>
                </div>
              </div>
              <Line className="bg-bluegray_100 h-px w-full" />
            </div>
            <div className="flex flex-col gap-[25px] items-start justify-center sm:px-5 px-[25px] w-full">
              <List
                className="flex-col gap-[25px] grid items-center w-full"
                orientation="vertical"
              >
                {reviewData.map((review) => (
                  <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out">
                    <div className="p-6">
                      <h5 className="font-semibold text-gray-600 text-lg leading-tight mb-4">
                        {review.message}
                      </h5>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm font-medium">
                          {review.date}
                        </p>
                        <p className="text-gray-700 font-bold text-lg">
                          {review.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfileReview;
