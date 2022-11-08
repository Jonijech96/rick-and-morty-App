import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { ResidentInfo } from "./ResidentInfo";
import loader from "../assets/img/loader.png";
import "./LocationInfo.css";

export const LocationInfo = ({ urlLocation }) => {
  const [location, setLocation] = useState([]);
  const [page, setPage] = useState(0);
  const forPage = 9;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get(urlLocation).then((res) => {
      setIsLoading(false);
      setLocation(res.data);
    });
  }, [urlLocation]);

  const pageMax = Math.ceil(location.residents?.length / forPage);
  if (isLoading) {
    return <img src={loader} alt="" width="300px" className="loading" />;
  }
  return (
    <>
      <div className="residents-location">
        <h1>{location.name}</h1>
        <div className="location-info">
          <h2>type: {location.type}</h2>
          <h2>dimension: {location.dimension}</h2>
          <h2>number of residents: {location.residents.length}</h2>
        </div>
      </div>
      <Pagination max={pageMax} setPage={setPage} page={page} />
      <ul className="residents-grid">
        {location.residents
          ?.slice(page * forPage, page * forPage + forPage)
          .map((resident) => (
            <ResidentInfo data={resident} key={resident} />
          ))}
      </ul>
      <Pagination max={pageMax} setPage={setPage} page={page} />
    </>
  );
};
