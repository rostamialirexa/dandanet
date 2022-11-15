import React from 'react'
import { Col } from 'react-bootstrap'
import classes from '../../../styles/BaseHeaderNavigation.module.css'
export default function BaseHeaderNavigation({setShowCategoryProduct}) {

  return (
    <div className={classes.DivBHN} 
    onMouseLeave={()=>(setShowCategoryProduct(false))}>
      <div>
        <Col className={classes.Col1BHN}>
        <ul className={classes.UlBHN}>
          <li className={classes.LiBHN}>اندودانتیکس</li>
          <li className={classes.LiBHN}>پروتز</li>
          <li className={classes.LiBHN}>ترمیمی و زیبایی</li>
          <li className={classes.LiBHN}>جراحی و پریو</li>
          <li className={classes.LiBHN}>اطفال</li>
          <li className={classes.LiBHN}>مواد و لوازم مصرفی</li>
          <li className={classes.LiBHN}>لوازم عمومی لابراتوری</li>
          <li className={classes.LiBHN}>ایمپلنت</li>
          <li className={classes.LiBHN}>تجهیزات و دستگاه ها</li>
          <li className={classes.LiBHN}>پزشکی</li>
          <li className={classes.LiBHN}>بهداشت دهان و دندان</li>
          <li className={classes.LiBHN}>ارتودنسی</li>
          <li className={classes.LiBHN}>محافظتی کرونا</li>
        </ul>
        </Col>
        <Col>ali</Col>
      </div>
    </div>
  )
}
