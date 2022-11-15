import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from '../../styles/LoadingHomepage.module.css'
export default function CategoryProducts() {
  return (
    <Container>
        <Row>
            {
                Array(11).fill({}).map((p,index)=>(
                    <Col xs={2} key={index} className={classes.colHCPI}>
                    <Skeleton circle={true} height={170} width={170}/>
                    </Col>
                )
        )
            }
        </Row>
    </Container>
  )
}
