import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ReactComponent as TrashIcon } from './trash-alt-regular.svg'

import { useDispatch } from 'react-redux'
import { removeCity } from '../../actions/actionCreator'

import './cityItem.css'

export default function CityItem({ text, id }) {
  const dispatch = useDispatch()
  return (
    <li className="city-item">
      <Link to={`/cities/${id}`} title="Show weather">
        <span className="text">{text}</span>
      </Link>
      <TrashIcon onClick={() => dispatch(removeCity(id))} className="trash-icon" title="Remove" />
    </li>
  )
}

CityItem.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
}

CityItem.defaultProps = {
  text: '',
  id: '',
}
