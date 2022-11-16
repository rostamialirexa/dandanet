import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from '../../styles/DoubleBanner.module.css'
export default function FirstDoubleBanner(props) {

  return (
    <Container>
  <Row>
  {
    props.FirstDoubleBannerData.map((element)=>(
      <Col key={element.id} xs={6} className={classes.Col6}>
        <Image
          alt={element.alt}
          src={element.image}
          width={660}
          height={250}
          className={classes.imageCol}
        />
      </Col>
    ))
  }
  </Row>
    </Container>
   
  )
}
