import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from '../../styles/LoadingHomepage.module.css'
export default function DoubleBanner() {
  return (
    <Container>
      <Row>
        <Col xs={6}>
        <Skeleton  height={285} width={650} className={classes.DoubleBanner}/>
        </Col>
        <Col xs={6}>
        <Skeleton  height={285} width={650} className={classes.DoubleBanner}/>
        </Col>
      </Row>
    </Container>
  )
}
