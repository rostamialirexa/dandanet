import { Col, Container, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from '../../styles/LoadingHomepage.module.css'
export default function CarouselSlider() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
        <Skeleton height={285} width={1320} className={classes.carouselSlider}/>
        </Col>
      </Row>
    </Container>
  )
}
