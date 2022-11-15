import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from '../../styles/LoadingHomepage.module.css'
export default function UltraBanner() {
  return (
    <Container>
      <Row>
        <Col xs={3}>
        <Skeleton  height={285} width={320} className={classes.DoubleBanner}/>
        </Col>
        <Col xs={3}>
        <Skeleton  height={285} width={320} className={classes.DoubleBanner}/>
        </Col>
        <Col xs={3}>
        <Skeleton  height={285} width={320} className={classes.DoubleBanner}/>
        </Col>
        <Col xs={3}>
        <Skeleton  height={285} width={320} className={classes.DoubleBanner}/>
        </Col>
      </Row>
    </Container>
  )
}
