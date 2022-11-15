import React, { useState } from 'react'
import classes from '../../styles/HomeCategoryProducts.module.css'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

export default function HomeCategoryProducts(props) {

  return (
    <Container >
    <Row>
      <div className={classes.divHCPI}>
      <h4>دسته‌بندی دندانت</h4>
      </div>
    </Row>
    <Row>
    {
     props.HCPI.map((element)=>(

     <Col xs={2} key={element.id} className={classes.colHCPI}>
     <Link href='/'>
     <Image
        width={170}
        height={170}
        alt={element.alt}
        src={element.image}
      />
      <p className={classes.pHCPI}>{element.title}</p>
     </Link>
     </Col>
      
     ))
    }
    </Row>
      </Container>
  )
}
