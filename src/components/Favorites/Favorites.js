import React from "react";
import classes from "./Favorites.module.scss";

const Favorites = () => {
  return (
    <div className={classes.Favorites}>
        <div>
            <div className={classes.Heart}>
                <i className="fa fa-heart" aria-hidden="true" />
            </div>
            <div className={classes.Add}>
                ADD THIS PAGE TO FAVORITES
            </div>
        </div>
    </div>
  );
};

export default Favorites;
