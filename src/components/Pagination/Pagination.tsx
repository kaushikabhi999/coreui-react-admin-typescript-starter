import React, { useCallback, useMemo } from "react";

type PaginationProps = {
  page?: number;
  setPage?: (page: number) => void;
  totalPages?: number;
};

function Pagination(props: PaginationProps) {
  const { page = 1, setPage = () => {}, totalPages = 1 } = props;
  const [firstPage, ...remainingPages] = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );
  const lastPage = remainingPages[remainingPages.length - 1];

  const handlePageClick = useCallback(
    (_page: number) => {
      setPage(_page);
    },
    [setPage]
  );

  return (
    <div className="pagination-container mb-4">
      <div className="col-12">
        <ul className="pagination-wrap">
          {firstPage < page - 1 && (
            <li
              onClick={() => {
                handlePageClick(firstPage);
              }}
            >
              <a href="/" onClick={(e) => e.preventDefault()}>
                {firstPage}
              </a>
            </li>
          )}
          {firstPage + 1 < page - 1 && (
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>
                ....
              </a>
            </li>
          )}
          {page - 1 > 0 && (
            <li
              onClick={() => {
                handlePageClick(page - 1);
              }}
            >
              <a href="/" onClick={(e) => e.preventDefault()}>
                {page - 1}
              </a>
            </li>
          )}

          <li
            className={"active"}
            onClick={() => {
              handlePageClick(page);
            }}
          >
            <a href="/" onClick={(e) => e.preventDefault()}>
              {page}
            </a>
          </li>

          {page + 1 < lastPage + 1 && (
            <li
              onClick={() => {
                handlePageClick(page + 1);
              }}
            >
              <a href="/" onClick={(e) => e.preventDefault()}>
                {page + 1}
              </a>
            </li>
          )}
          {lastPage - 1 > page + 1 && (
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>
                ....
              </a>
            </li>
          )}
          {lastPage > page + 1 && (
            <li
              onClick={() => {
                handlePageClick(lastPage);
              }}
            >
              <a href="/" onClick={(e) => e.preventDefault()}>
                {lastPage}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
