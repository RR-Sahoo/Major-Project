import React from "react";
import { Button } from "components";

const Pagination = ({ currentPage, totalPages, onClick }) => {
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    const isActive = currentPage === i;
    pageButtons.push(
      <Button
        key={i}
        className={`border ${
          isActive ? "border-gray_700" : "border-bluegray_102"
        } border-solid cursor-pointer font-semibold h-12 px-[18px] py-4 rounded-[10px] text-base text-center text-gray_900 w-12`}
        onClick={() => onClick(i)}
      >
        {i}
      </Button>
    );
  }

  return (
    <div className="flex gap-4 items-center justify-center my-8">
      {pageButtons}
    </div>
  );
};

export default Pagination;
