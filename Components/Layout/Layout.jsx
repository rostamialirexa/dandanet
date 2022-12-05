import React, { useState } from 'react'
import Navigation from '../Header/Navigation/Navigation'
import Header from '../Header/TopHeader/Header'
import classes from '../../styles/Layout.module.css'
import BaseHeaderNavigation from '../Header/BaseHeaderNavigaton/BaseHeaderNavigation'
import Footer from '../Footer'
import Meta from '../Header/MetaTags/Meta'
function Layout(props) {
  const [showCategoryProduct, setShowCategoryProduct] = useState(false)

  return (
    <>
    <Meta/>
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
      <Footer/>
    </>
  )
}

export default Layout