import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from '../../styles/LoadingHomepage.module.css'
export default function Footer() {
  return (
    <Skeleton height={500} width={1510}/>
  )
}
