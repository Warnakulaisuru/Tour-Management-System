import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const [credentials, setCredentials] = useState({
    userId: '01',
    userEmail: 'example@gmail.com',
    fullName: '',
    phone: '',
    bookAt: '',
    guestSize: '1',
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { id, value } = e.target;
    setCredentials({ ...credentials, [id]: value });
  };

  const handlePhoneChange = value => {
    setCredentials({ ...credentials, phone: value });

    // Validate phone number
    if (isValidPhoneNumber(value)) {
      setErrors({ ...errors, phone: '' });
    } else {
      setErrors({ ...errors, phone: 'Invalid phone number' });
    }
  };

  //send data to the server
  const handleClick = e => {
    e.preventDefault()
    console.log(credentials);
  }


  return (
    <div className='booking'>
      <div className='booking__top d-flex align-items-center justify-content-between'>
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* --booking form start-- */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info--form' onSubmit={handleClick}>
          <FormGroup>
            <input
              type='text'
              placeholder='Full Name'
              id='fullName'
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <PhoneInput
              country={'us'}
              value={credentials.phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true,
              }}
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
            <input
              type='date'
              id='bookAt'
              required
              onChange={handleChange}
            />
            <input
              type='number'
              placeholder='Guest Size'
              id='guestSize'
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* --booking form end-- */}

      {/* --booking bottom-- */}
      <div className='booking__bottom'>
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>
                    ${price}<i className="ri-asterisk"></i> 1 person</h5>
                <span> ${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service Charge</h5>
                <span> $10</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span> ${parseInt(price) + 10}</span>
            </ListGroupItem>
        </ListGroup>

        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  );
};

export default Booking;
