import React from "react";
import "./Pagination.css";

export const Pagination = ({ max, setPage }) => {
  let arrayButtons = [];

  for (let index = 0; index < max; index++) {
    arrayButtons.push(
      <button onClick={() => setPage(index)} key={index}>
        {index + 1}
      </button>
    );
  }

  return <div className="pagination">{arrayButtons}</div>;
};
