import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from '../../styles/SpecialOffer.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

export default function SpecialOffer() {
  return (
    <Container className={classes.specialOffer}>
        <Row>
                <Col xs={2}>
                <Link className={classes.SpecialOfferBanner} href='/Special'>
                    <Image
                        alt=''
                        src='/images/amazing-typo.svg'
                        width={92}
                        height={77}
                    />
                    <Image
                        alt=''
                        src='/images/box.png'
                        width={145}
                        height={115}
                    />
                    <div className={classes.showAll}>مشاهده همه
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    
                </Link>
                </Col>
                <Col xs={10}>
                <Swiper
                   slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={4}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className={classes.mySwiper}
                >
        <SwiperSlide className={classes.SwiperSlide}>Slide 1</SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>Slide 2</SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>Slide 3</SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>Slide 4</SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>Slide 5</SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>Slide 6</SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>Slide 7</SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>Slide 8</SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>Slide 9</SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>Slide 10</SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>Slide 11</SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>Slide 12</SwiperSlide>
      </Swiper>
                </Col>
        </Row>
    </Container>
  )
}
