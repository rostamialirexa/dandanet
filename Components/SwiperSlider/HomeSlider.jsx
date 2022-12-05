import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import classes from '../../styles/Header.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
export default function HomeSlider(props) {
  
  return (
    <Container fluid="true" >
      <Row>
        <Col>
        <Swiper
        effect='fade'
       
        centeredSlides={true}
        loop={true}
        autoplay={{delay: 2500,disableOnInteraction: false,}}
        pagination={{clickable: true}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

      >
      {
        props.HSI.map((element)=>(
          <SwiperSlide key={element.id} className={classes.unsetimg}>
                <Image 
                alt={element.alt}
                src={element.image}
                width={1500}
                height={500}
                className={classes.customimg}
            />
        </SwiperSlide>
        ))
      }
  
    </Swiper>
        </Col>
      </Row>
    </Container>
  )
}
