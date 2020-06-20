import React from 'react'
import classes from './AsideNavBar.module.scss'
import Logo from '../../assets/logo/logo.png'


const AsideNavBar = ({show}) => {

    const firstGroupIcons = [
        {label:"fa fa-tachometer",id:1},
        {label:"fas fa-key",id:2},
        {label:"fa fa-user",id:3},
        {label:"fa fa-bullhorn",id:4},
        {label:"fa fa-chart-area",id:5},
        {label:"fas fa-exchange-alt",id:6},
        {label:"fas fa-cog",id:7},
    ]
    const SecondGroupIcons = [
        {label:"fas fa-heart",id:8},
        {label:"fas fa-clock",id:9},
        {label:"fas fa-eye",id:10},
    ]
    const firstGroupIconsElements = firstGroupIcons.map(({id,label}) => <div key={label+id}><i className={label}/></div> )
    const secondGroupIconsElements = SecondGroupIcons.map(({id,label}) => <div key={label+id}><i className={label}/></div> )

    const cls = show ? classes.AsideNavBar : `${classes.AsideNavBar} ${classes.Show}`

    return (
        <nav className = {cls}>
            <div className={classes.Logo}>
                <img src={Logo} alt= 'logo'/>    
            </div> 
            <div className={classes.FirstGroupIcons}>
                {firstGroupIconsElements}
            </div> 
            <div className={classes.SecondGroupIcons}>
               {secondGroupIconsElements}
            </div> 
        </nav>
    )
}

export default AsideNavBar
