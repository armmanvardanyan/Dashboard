import React, { useState } from 'react';
import classes from './App.module.scss';
import Header from '../Header/Header';
import Favorites from '../Favorites/Favorites';
import Commisions from '../Commisions/Commisions';
import Statics from '../Statics/Statics';
import UserTable from '../UserTable/UserTable';
import AsideNavBar from '../AsideNavBar/AsideNavBar';
import ToggleNav from '../ToggleNav/ToggleNav';


const App = () => {
  const [show,setShow] = useState(true)
  const onToggleHandler = () => {
      setShow(prev => !prev)
  } 
  return (
    <div className={classes.App}>
        <div className={classes.Wrapper}>
            <AsideNavBar show={show}/>
            <ToggleNav onToggle = {onToggleHandler} show = {show} />
            <Header/>
            <Favorites/>
            <Commisions/>
             <Statics/>
            <UserTable/>
        </div> 
    </div>
  );
}

export default App;
