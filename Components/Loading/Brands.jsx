import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from '../../styles/LoadingHomepage.module.css'
export default function Brands() {
  return (
    <Container>
        <Row>
            {
                Array(12).fill({}).map((p,index)=>(
                    <Col xs={1} key={index}>
                    <Skeleton circle={true} height={100} width={100}/>
                    </Col>
                )
        )
            }
        </Row>
    </Container>

  )
}
