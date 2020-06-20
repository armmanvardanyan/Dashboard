import React from "react";
import classes from "./Statics.module.scss";
import Chart from './Chart/Chart'
import ActiveMedia from "./ActiveMedia/ActiveMedia";
import GeoData from "./GeoData/GeoData";

const Statics = () => {
  return (
    <div className={`${classes.Statics} container-fluid`}>
        <div className="row">
          <div className={"col-md-5 "}>
            <Chart/>
          </div>
          <div className={`col-md-3`}>
            <ActiveMedia/>
          </div>
          <div className={`col-md-4`}>
            <GeoData/>
          </div>
        </div>
    </div>
  );
};

export default Statics;
