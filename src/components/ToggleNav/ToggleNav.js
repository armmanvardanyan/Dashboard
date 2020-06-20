import React from 'react'
import classes from './ToggleNav.module.scss'

const ToggleNav = ({show,onToggle}) => {
    const toggleClass = show ? classes.Toggle : `${classes.Toggle} ${classes.Hide}`;
    const chevronClass = show ? "fa fa-chevron-left" :"fa fa-chevron-right"
    return (
        <div className={toggleClass} onClick={onToggle}>
            <i className= {chevronClass} aria-hidden="true" />
        </div>
    )
}

export default ToggleNav
