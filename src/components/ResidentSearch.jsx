import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ResidentSearch.css";
import AsyncSelect from "react-select/async";

export const ResidentSearch = ({ changeLocation }) => {
  const [inputLocation, setInputLocation] = useState("");
  const [residentAll, setResidentAll] = useState([]);
  const [isSearchId, setIsSearchId] = useState(false);

  const handleOnChange = () => {
    setIsSearchId(!isSearchId);
  };

  const loadOptions = (inputValue, callback) => {
    const url = `https://rickandmortyapi.com/api/location/?name=${inputValue}`;
    axios.get(url).then((res) => {
      setResidentAll(res.data.results);
      // console.log(inputValue);
      callback(
        residentAll.map((result) => ({
          label: result.name,
          value: result.url,
        }))
      );
    });
  };

  const handleChange = ({ value }) => {
    // console.log(value);
    changeLocation(value);
  };

  return (
    <div className="search-content">
      <input
        className={`checkbox ${isSearchId && "check-search"}`}
        type="checkbox"
        checked={isSearchId}
        onChange={handleOnChange}
      />

      {!isSearchId ? (
        <AsyncSelect
          className="search-select"
          placeholder="write location to search..."
          cacheOptions
          loadOptions={loadOptions}
          onChange={handleChange}
        />
      ) : (
        <>
          <input
            className="input-text"
            type="text"
            placeholder="write id"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
          />
          <button
            onClick={() =>
              changeLocation(
                `https://rickandmortyapi.com/api/location/${inputLocation}`
              )
            }
          >
            search
          </button>
        </>
      )}
    </div>
  );
};
