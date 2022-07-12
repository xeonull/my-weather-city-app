import React from 'react'
import PropTypes from 'prop-types'

import './cityInput.css'

export default function CityInput({ value, onChange, onKeyPress }) {
  return (
    <div className="city-input-wrapper">
      <input
        className="city-input"
        placeholder="Enter the city"
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}

CityInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

CityInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
}
