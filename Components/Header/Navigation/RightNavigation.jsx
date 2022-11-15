import React, { useState } from 'react'
import Link from 'next/link'
import classes from '../../../styles/RightNavigation.module.css'
export default function RightNavigation(props) {
    const {setShowCategoryProduct} = props
    
    const CategoryProductMouseOver = () => {
      setShowCategoryProduct(true)
    }

  return (
    <>
    <li className={classes.rightMenu}>
        <ul className={classes.UlRightMenu}>
            <li 
            onMouseEnter={CategoryProductMouseOver}
            className={classes.categoryProduct}>
            <i className="fa fa-bars" aria-hidden="true"></i>
            دسته بندی کالاها
            </li>
            <li ><Link className={classes.LiRightMenu} href=''>پیشنهاد ویژه</Link></li>
            <li ><Link className={classes.LiRightMenu} href=''>کالاهای ارز دولتی</Link></li>
            <li ><Link className={classes.LiRightMenu} href=''>درباره دندانت</Link></li>
            <li ><Link className={classes.LiRightMenu} href=''>تماس با ما</Link></li>
        </ul>
    </li>
   
    </>
  )
}
