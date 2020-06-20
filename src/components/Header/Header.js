import React from "react";
import classes from "./Header.module.scss";
import LeftIcon from "../../assets/leftIcon.png";
import UserIcon from "../../assets/user.png";

const Header = () => {
  return (
    <div className={`container-fluid`}>
      <div className={classes.Header}>
        <div className={classes.Left}>
          <img src={LeftIcon} alt={'left-icon'} />
        </div>
        <div className={classes.Lang}>
          <a href="/">
            <img src={`https://www.countryflags.io/gb/flat/32.png`} alt={'language'} />
            <span>EN</span>
          </a>
        </div>
        <div className={classes.User}>
          <div className={classes.UserInfo}>
            <img src={UserIcon} alt={`user`} className={classes.UserIcon} />
            <div>
              <div>Hello, Max!</div>
              <div>Last login: Thu Mar 20 2014</div>
            </div>
          </div>
          <div className={classes.ArrowDown}>
            <i className="fa fa-caret-down" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
