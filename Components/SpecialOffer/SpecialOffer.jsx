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

export default function SpecialOffer(props) {
  const {data} = props;
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
                <Col md={10}>
                <Swiper
                  slidesPerView={5}
                  spaceBetween={20}
                  slidesPerGroup={4}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
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
                </Col>
        </Row>
    </Container>
  )
}
