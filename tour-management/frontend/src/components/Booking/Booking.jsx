import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    bookAt: '',
    guestSize: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Validate phone number
    if (id === 'phone') {
      const phoneNumber = parsePhoneNumberFromString(value);
      if (phoneNumber && phoneNumber.isValid()) {
        setErrors({ ...errors, phone: '' });
      } else {
        setErrors({ ...errors, phone: 'Invalid phone number' });
      }
    }
  };

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
        <Form className='booking__info--form'>
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
            <input
              type='tel'
              placeholder='Phone'
              id='phone'
              required
              onChange={handleChange}
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
    </div>
  );
};

export default Booking;
