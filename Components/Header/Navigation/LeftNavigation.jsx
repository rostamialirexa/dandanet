import React from 'react'
import classes from '../../../styles/LeftNavigation.module.css'
export default function LeftNavigation() {
  return (
    <li className={classes.leftMenu}>
    <span>لطفا شهر و استان خود را انتخاب کنید</span>
    <i className="fa fa-map-marker" aria-hidden="true"></i>
  </li>
  )
}
