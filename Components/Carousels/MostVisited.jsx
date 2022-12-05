import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import classes from '../../styles/Carousels.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
export default function MostVisited(props) {
  const {data} = props
  return (
    <Container>
      <Row>
        <Col xs={12} className={classes.ColCarousel}>
          <div className={classes.CarouselDiv}>
   
            <h6 className={classes.CarouselSpan}>پربازدیدترین</h6>
          
          <Link href='/' className={classes.CarouselLink}>
           <h6> مشاهده همه</h6>
           <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          </div>
        </Col>
        <Swiper
                  slidesPerView={6}
                  spaceBetween={30}
                  slidesPerGroup={4}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className={classes.MySwiper}
                >
                    {
                      data.map((element)=>(
                        <SwiperSlide className={classes.SwiperSlide}>
                        
                          <Image
                            className={classes.ImageProduct}
                            src={element.image.url}
                            alt={element.image.alt}
                            layout='fill'
                          />
                          <p className={classes.faCaption}>{element.title.name_fa}</p>
                        </SwiperSlide>
                      ))
                    }
                </Swiper>
      </Row>
    </Container>
  )
}
