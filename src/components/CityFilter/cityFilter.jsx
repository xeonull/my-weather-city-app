import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addCity } from '../../actions/actionCreator'

import CityInput from '../CityInput/cityInput'
import CityList from '../CityList/cityList'

import './cityFilter.css'

export default function CityFilter() {
  const cities = useSelector((state) => state.cities)
  const dispatch = useDispatch()
  const [cityText, setCityText] = useState('')

  const handleInputChange = ({ target: { value } }) => {
    setCityText(value)
  }

  const addCityHandler = ({ key }) => {
    if (cityText.length > 2 && key === 'Enter') {
      dispatch(addCity(cityText.toLowerCase(), cityText, false))
      setCityText('')
    }
  }

  const isCitiesExist = cities && cities.length > 0
  const filteredCities = cities.filter((city) => city.id.includes(cityText.toLowerCase()))

  return (
    <div className="filter-wrapper box-light">
      <CityInput onKeyPress={addCityHandler} onChange={handleInputChange} value={cityText} />
      {isCitiesExist && <CityList cityList={filteredCities} />}
    </div>
  )
}
