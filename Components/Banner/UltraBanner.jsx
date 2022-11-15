import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from '../../styles/DoubleBanner.module.css'
export default function UltraBanner(props) {

  return (
    <Container>
  <Row>
  {
    props.UltraBannerData.map((element)=>(
      <Col key={element.id} xs={3} className={classes.Col3}>
        <Image
          alt={element.alt}
          src={element.image}
          width={330}
          height={250}
          className={classes.imageCol3}
        />
      </Col>
    ))
  }
  </Row>
    </Container>
   
  )
}
