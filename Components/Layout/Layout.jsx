import React, { useState } from 'react'
import Navigation from '../Header/Navigation/Navigation'
import Header from '../Header/TopHeader/Header'
import classes from '../../styles/Layout.module.css'
import BaseHeaderNavigation from '../Header/BaseHeaderNavigaton/BaseHeaderNavigation'

function Layout(props) {
  const [showCategoryProduct, setShowCategoryProduct] = useState(false)

  return (
    <>
      <div className={classes.allHeader}>
      <Header/>
      <Navigation setShowCategoryProduct={setShowCategoryProduct}/>
      
      </div>
      {
        showCategoryProduct? 
          (
          <BaseHeaderNavigation setShowCategoryProduct={setShowCategoryProduct}/>
          ) 
          : null
      }
      <main>{props.children}</main>
    </>
  )
}

export default Layout