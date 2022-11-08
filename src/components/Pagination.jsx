import React from "react";
import "./Pagination.css";

export const Pagination = ({ max, setPage, page }) => {
  let arrayButtons = [];

  for (let index = 0; index < max; index++) {
    arrayButtons.push(
      <button
        className={page == index ? "button-select" : ""}
        onClick={() => setPage(index)}
        key={index}
      >
        {index + 1}
      </button>
    );
  }

  return <div className="pagination">{arrayButtons}</div>;
};
