import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

export default function Card({day}) {
    const ms = day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('en', {weekday: 'long'});

    const imgURL = "owf owf-"+ day.weather[0].id +" owf-5x icon-style"

    return (
        <div className="card box-light">
          <h3 className="card-title">{weekdayName}</h3>
          <i className={imgURL}></i>
          <h2>{Math.round(day.main.temp)} °C</h2>
          <h5>feels like: {Math.round(day.main.feels_like)} °C</h5>
          <div className="card-body">
            <p>{day.weather[0].description}</p>
          </div>
        </div>
    )
}

Card.propTypes = {
  day: PropTypes.object,
}
Card.defaultProps = {
  day: {},
}

