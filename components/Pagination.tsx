import React, { Dispatch } from "react";

import ReactPaginate from "react-paginate";

interface PaginateTwoProps {
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
  forcePage?: number;
  currentPage: number;
  totalDocs: number;
  itemsPerPage: number;
}

const PaginateTwo = ({
  totalDocs,
  currentPage,
  itemsPerPage,
  setCurrentPage,
}: PaginateTwoProps) => {
  const pageCount = Math.ceil(totalDocs / itemsPerPage);
  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected + 1);
  };
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalDocs);

  const displayText = `Showing ${startItem} - ${endItem} of ${totalDocs}`;

  return (
    <div className="flex flex-col gap-4 text-center py-3 pl-4 max-w-[540px]">
      <h2 className="md:text-sm text-xxs font-bold text-gray-70 leading-5">
        {displayText}
      </h2>
      <ReactPaginate
        breakLabel="..."
        containerClassName="flex w-full items-center gap-3 px-4"
        marginPagesDisplayed={1}
        nextClassName="flex-1 flex justify-end"
        pageClassName="flex items-center text-base font-semibold  justify-center py-1.5 px-3 bg-light-200  border border-solid border-light-200 text-blue-50 rounded-md transition-[.5] hover:bg-blue-50 hover:text-white outline-none cursor-pointer"
        pageLinkClassName="font-inter md:text-sm text-xxs font-medium flex"
        activeClassName="!bg-brand-100 dark:!bg-brand-200 border border-solid !border-brand-100 dark:!border-brand-200 text-white rounded-md"
        previousClassName="flex-1"
        previousLabel={
          <div
            className={`flex w-fit py-2 font-bold px-3.5 text-sm items-center ${
              currentPage === 1
                ? " text-brand-300/40 dark:text-white/40 cursor-not-allowed"
                : "cursor-pointer text-brand-300 dark:text-white"
            }`}
          >
            Prev
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        forcePage={currentPage - 1}
        pageCount={pageCount}
        nextLabel={
          <div
            className={`flex w-fit py-2 font-bold px-3.5 text-sm items-center ${
              currentPage === pageCount
                ? " cursor-not-allowed text-brand-300/40 dark:text-white/40"
                : "cursor-pointer text-brand-300 dark:text-white"
            }`}
          >
            Next
          </div>
        }
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginateTwo;
