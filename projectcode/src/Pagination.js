import React from "react";
import "./Pagination.css";
import "./App.css";


export default function Pagination ({ totalPages, currentPage, onPageChange }) {
  let pageNumbers = [];

  if(currentPage < 3) {
    pageNumbers = [ 2, 3, "..."]; 
  }
  else if( currentPage === 3) {
    pageNumbers = [ 2, 3, 4, "..."];
  }
  else if( currentPage === 4) {
    pageNumbers = [ 2, 3, 4, 5, "..."];
  } else if (currentPage >= totalPages - 3) {
    pageNumbers = [ "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1];

  } else {
    pageNumbers = [ "...", currentPage - 1, currentPage, currentPage + 1, "..."];
  }
  
  return (
    <div aria-label="Pagination">
      <div style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
      <ul className="pagination-list">
        <li>
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="previous"
            aria-label="Go to previous page"
          >
            Previous
          </button>
        </li>
        <li key="first" className={1 === currentPage ? "active": ""}>
            <button
                onClick={() => onPageChange(1)}
                aria-label="Go to page 1"
                className="active"
                aria-current={currentPage === 0 ? "page" : undefined}
            >
                1
            </button>
        </li>
        {pageNumbers.map((number, index) => (
          <li key={index} className={number === currentPage ? "active" : ""}>
            <button
              onClick={() => onPageChange(number)}
              aria-label={`Go to page ${number}`}
              disabled={number === "..."}
              aria-current={number === currentPage ? "page" : undefined}
            >
              {number === "..." ? 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" fill="#747676" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path></svg>
              : number}
            </button>
          </li>
        ))}
        <li>
            <button
                onClick={() => onPageChange(totalPages)}
                aria-label="Go to last page"
                disabled={currentPage < totalPages - 3}
            >
                {totalPages}
            </button>
        </li>
        <li>
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
            className="next"
          >
            Next
          </button>
        </li>
      </ul>
      </div>
    </div>
  );
};