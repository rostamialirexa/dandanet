import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from '../../styles/Carousels.module.css'
export default function MostVisited() {
  return (
    <Container>
      <Row>
        <Col xs={12} className={classes.ColCarousel}>
          <div className={classes.CarouselDiv}>
   
            <h6 className={classes.CarouselSpan}>برندها</h6>
          
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
