import React from 'react'
import './newsletter.css'

import {Container,Row,Col} from 'reactstrap'
import maleTouist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
    <Container>
      <Row>
        <Col lg='6'>
        <div className="newsletter__content">
         <h2>Subscribe now to get useful traveling information.</h2>
         <div className='newsletter__input'>
            <input type='email' placeholder='Enter your email' />
            <button className='btn newsletter__btn'>Subscribe</button>
         </div>
         <p>
         Join us to enjoy your holiday with freedom and happiness. We are ready to provide friendly service with many types of packages. Connect with us through the following Links
         </p>
        </div>
        </Col>
        <Col lg='6'>
        <div className='newsletter__img'>
            <img src={maleTouist} alt='' />
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Newsletter