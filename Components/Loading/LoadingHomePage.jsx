import React from 'react'
import CarouselSlider from './CarouselSlider'
import CategoryProducts from './CategoryProducts'
import DoubleBanner from './DoubleBanner'
import Slider from './Slider'
import UltraBanner from './UltraBanner'
import Brands from './Brands'
import Footer from './Footer'

export default function LoadingHomePage() {
  return (
    <>
        <Slider/>
        <CategoryProducts/>
        <CarouselSlider/>
        <DoubleBanner/>
        <CarouselSlider/>
        <UltraBanner/>
        <CarouselSlider/>
        <DoubleBanner/>
        <CarouselSlider/>
        <Brands/>
        <Footer/>
    </>
    
    
  )
}
