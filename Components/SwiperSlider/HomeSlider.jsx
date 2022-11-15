import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import classes from '../../styles/Header.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
export default function HomeSlider(props) {
  
  return (
    <Swiper
        effect='fade'
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{delay: 2500,disableOnInteraction: false,}}
        pagination={{clickable: true}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {
        props.HSI.map((element)=>(
          <SwiperSlide key={element.id} className={classes.unsetimg}>
                <Image 
                alt={element.alt}
                src={element.image}
                layout="fill" 
                className={classes.customimg}
            />
        </SwiperSlide>
        ))
      }
  
    </Swiper>
  )
}
