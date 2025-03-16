import React, { Dispatch } from "react";

import ReactPaginate from "react-paginate";
import styled from "styled-components";
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
    <Wrapper>
      <h2>{displayText}</h2>
      <ReactPaginate
        breakLabel="..."
        containerClassName="paginate_classname"
        marginPagesDisplayed={1}
        nextClassName="nextClassName"
        pageClassName="pageClassName"
        pageLinkClassName="pageLinkClassName"
        activeClassName="activeClassName"
        previousClassName="previousClassName"
        previousLabel={
          <div
            className={`previousLabel ${
              currentPage === 1
                ? " disabled"
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
            className={`nextLabel ${
              currentPage === pageCount
                ? " disabled"
                : "cursor-pointer text-brand-300 dark:text-white"
            }`}
          >
            Next
          </div>
        }
        renderOnZeroPageCount={null}
      />
    </Wrapper>
  );
};

export default PaginateTwo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  padding: 12px 16px 12px 16px;
  max-width: 540px;
  width: 100%;
  margin: 0 auto;
  h2 {
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--color-gray-700);
    line-height: 1.25rem;

    @media (min-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;
