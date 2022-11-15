import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from '../../styles/Carousels.module.css'
export default function Bestselling() {
  return (
    <Container>
      <Row>
        <Col xs={12} className={classes.ColCarousel}>
          <div className={classes.CarouselDiv}>
   
            <h6 className={classes.CarouselSpan}>پرفروش‌ترین</h6>
          
          <Link href='/' className={classes.CarouselLink}>
           <h6> مشاهده همه</h6>
           <i class="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
