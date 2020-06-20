import React from "react";
import classes from "./Commisions.module.scss";

const Commisions = () => {
  const commisions = [
    {
      text: "SIGNUPS",
      iconLabel: "fa fa-check",
      amount: "$25",
      clsName: "SignUps",
    },
    {
      text: "PROFIT",
      iconLabel: "fa fa-line-chart",
      amount: "$1000",
      clsName: "Profit",
    },
    {
      text: "COMMISIONS",
      iconLabel: "fa fa-money",
      amount: "$350",
      clsName: "Simple",
    },
    {
      text: "PENDING COMMISSION",
      iconLabel: "fa fa-check",
      amount: "$300",
      clsName: "Pending",
    },
  ];

  const commisionElements = commisions.map(
    ({ text, iconLabel, amount, clsName }) => {
      return (
        <div
          className={`${classes.Commision} ${classes[clsName]}`}
          key={amount}
        >
          <div className={classes.Amount}>{amount}</div>
          <div className={classes.IconAndName}>
            <div>
              <i className={iconLabel} aria-hidden="true" />
            </div>
            <div>{text}</div>
          </div>
        </div>
      );
    }
  );

  return <div className={classes.Commisions}>{commisionElements}</div>;
};

export default Commisions;
