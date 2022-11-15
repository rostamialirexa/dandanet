import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from '../../styles/Carousels.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
export default function Newest() {
  return (
    <Container>
      <Row>
        <Col xs={12} className={classes.ColCarousel}>
          <div className={classes.CarouselDiv}>
   
            <h6 className={classes.CarouselSpan}>جدیدترین‌ها</h6>
          
          <Link href='/' className={classes.CarouselLink}>
           <h6> مشاهده همه</h6>
           <i class="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          </div>
        </Col>
        <Swiper
                   slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={4}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  
                >
        <SwiperSlide >Slide 1</SwiperSlide>
        <SwiperSlide >Slide 2</SwiperSlide>
        <SwiperSlide >Slide 3</SwiperSlide>
        <SwiperSlide >Slide 4</SwiperSlide>
        <SwiperSlide >Slide 5</SwiperSlide>
        <SwiperSlide >Slide 6</SwiperSlide>
        <SwiperSlide >Slide 7</SwiperSlide>
        <SwiperSlide >Slide 8</SwiperSlide>
        <SwiperSlide >Slide 9</SwiperSlide>
        <SwiperSlide >Slide 10</SwiperSlide>
        <SwiperSlide >Slide 11</SwiperSlide>
        <SwiperSlide >Slide 12</SwiperSlide>
      </Swiper>
      </Row>
    </Container>
  )
}
