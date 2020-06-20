import React from "react";
import classes from "./GeoData.module.scss";
import { ReactComponent as Map } from "../../../assets/map.svg";

const GeoData = () => {
  return (
    <div className="pt-2" style={{minHeight:"270px" }}>
      <div className="row">
        <div className="col">Geographic Data</div>
        <div className="col text-right">Last Month</div>
      </div>
      <div className="row">
        <div className={`col-1 offset-1 offset-sm-0 ${classes.Squares}`}>
          <div></div>
          <div></div>
        </div>
        <div className={`col-8 offset-2 ${classes.MapContainer}`}>
          <Map />
        </div>
      </div>
      <div className={"row"}>
        <div className="col text-right">Affilate sign ups</div>
      </div>
      <div className={classes.List}>
        <ul className="list-group ">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            1. United States
            <span className="badge ">200</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            2. China
            <span className="badge">65</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            3. United Kingdom
            <span className="badge">22</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default GeoData;
