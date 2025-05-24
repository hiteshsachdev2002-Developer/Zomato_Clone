import React, { useState } from 'react';

const ReservationForm = () => {
  const [date, setDate] = useState('Today');
  const [guests, setGuests] = useState('1 guest');

  return (
    <div className="reservation-container">
      <div className="reservation-header">
        <h3>Table reservation</h3>
        <p className="offer-text">✨ Flat 30% OFF + 3 more offers</p>
      </div>

      <div className="reservation-form">
        <select value={date} onChange={(e) => setDate(e.target.value)}>
          <option>Today</option>
          <option>Tomorrow</option>
          <option>Pick a date</option>
        </select>

        <select value={guests} onChange={(e) => setGuests(e.target.value)}>
          <option>1 guest</option>
          <option>2 guests</option>
          <option>3 guests</option>
          <option>4+ guests</option>
        </select>
      </div>

      <button className="book-btn">Book a table</button>
    </div>
  );
};

export default ReservationForm;
