import axios from "axios";
import React, { useEffect, useState } from "react";
import "./LocationSearch.css";
import AsyncSelect from "react-select/async";

export const LocationSearch = ({ changeLocation }) => {
  const [inputIdLocation, setInputIdLocation] = useState("");
  const [locationAll, setLocationAll] = useState([]);
  const [isSearchId, setIsSearchId] = useState(false);

  const idHandleChange = () => {
    setIsSearchId(!isSearchId);
  };

  const loadOptions = (inputValue, callback) => {
    const optionsUrl = `https://rickandmortyapi.com/api/location/?name=${inputValue}`;
    axios.get(optionsUrl).then((res) => {
      setLocationAll(res.data.results);
      callback(
        locationAll.map((location) => ({
          label: location.name,
          value: location.url,
        }))
      );
    });
  };

  const selectHandleChange = ({ value: url }) => {
    changeLocation(url);
  };

  return (
    <div className="search-content">
      <input
        className={`checkbox ${isSearchId && "check-search"}`}
        type="checkbox"
        checked={isSearchId}
        onChange={idHandleChange}
      />

      {!isSearchId ? (
        <AsyncSelect
          className="search-select"
          placeholder="type a location to search..."
          cacheOptions
          loadOptions={loadOptions}
          onChange={selectHandleChange}
        />
      ) : (
        <>
          <input
            className="input-text"
            type="text"
            placeholder="write id"
            value={inputIdLocation}
            onChange={(e) => setInputIdLocation(e.target.value)}
          />
          <button
            onClick={() =>
              changeLocation(
                `https://rickandmortyapi.com/api/location/${inputIdLocation}`
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
