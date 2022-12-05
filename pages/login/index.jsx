import React from 'react'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import classes from '../../styles/Login.module.css'
export default function Login() {
    const router = useRouter()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const lastNameRef = useRef(null)
    const firstNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()


    const handelsubmit = (event) => {
        event.preventDefault()
        setFirstName(firstNameRef.current.value)
        setLastName(lastNameRef.current.value)
        setEmail(emailRef.current.value)
        setPassword(passwordRef.current.value)
            const fetchData = async () => {
              const response = await axios.post('https://reqres.in/api/register',{})
              console.log(response)
            }
            fetchData()
    }
  return (
                <>

<Container className='text-center'>
  <Row>
  <div>
  <Image 
                alt='Login' 
                src='/images/LoginBack.jpg' 
                width={1500}
                height={500}
                className={classes.customimg}
            />
  </div>
    <Col md={12} >
    <div className={`card mx-4 mx-md-5 shadow-5-strong ${classes.SignUpForm}`}>
    <div className="card-body py-5 px-md-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-5">Sign up now</h2>
          <form>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input type="text" id="form3Example1" className="form-control" />
                  <label className="form-label" htmlFor="form3Example1">First name</label>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input type="text" id="form3Example2" className="form-control" />
                  <label className="form-label" htmlFor="form3Example2">Last name</label>
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" />
              <label className="form-label" htmlFor="form3Example3">Email address</label>
            </div>
            <div className="form-outline mb-4">
              <input type="password" id="form3Example4" className="form-control" />
              <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign up
            </button>
            <div className="text-center">
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    </Col>
  </Row>
</Container>

                </>
  )
}
