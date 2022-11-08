import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ResidentInfo.css";
export const ResidentInfo = ({ data }) => {
  const [resident, setResident] = useState({});
  const status = {
    Dead: "🔴 dead",
    Alive: "🟢 alive",
    unknown: "❔ unknown",
  };
  useEffect(() => {
    axios.get(data).then((res) => setResident(res.data));
  }, []);
  // console.log(resident);
  return (
    <li className="resident-card">
      <h3>{resident.name}</h3>
      <div className="img-description">
        <div className="img-content">
          <p className="img-status">{status[resident.status]}</p>
          <img
            className="img-resident"
            src={resident.image}
            width="250px"
            alt=""
          />
        </div>
        <div className="resident-description">
          <p>
            <span>type:</span>
            {resident.type}
          </p>
          <p>
            <span>origin:</span>
            {resident.origin?.name}
          </p>
          <p>
            <span>episodes:</span>
            {resident.episode?.length}
          </p>
        </div>
      </div>
    </li>
  );
};
