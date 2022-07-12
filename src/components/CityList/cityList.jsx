import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { sortCities } from '../../actions/actionCreator'

import CityItem from '../CityItem/cityItem'

import './cityList.css'

export default function CityList({ cityList }) {
  const dispatch = useDispatch()
  return (
    <div className="block-list-center">
      <span className="sort-block">sort:</span>
      <span className="sort-block sort-arrows" onClick={() => dispatch(sortCities(1))} title='Ascending'>
        &#8593;
      </span>
      <span className="sort-block sort-arrows" onClick={() => dispatch(sortCities(-1))} title='Descending'>
        &#8595;
      </span>
      <ul className="city-list">
        {cityList.map(({ id, text }) => (
          <CityItem id={id} key={id} text={text} />
        ))}
      </ul>
    </div>
  )
}

CityList.propTypes = {
  cityList: PropTypes.array,
}

CityList.defaultProps = {
  cityList: [],
}
