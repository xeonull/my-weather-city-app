import { ADD_CITY, REMOVE_CITY, SORT_CITIES } from '../constants'
import { load } from 'redux-localstorage-simple'

let CITIES = load({ namespace: 'weather-city-list' })

if (!CITIES || !CITIES.cities || !CITIES.cities.length) {
  CITIES = { cities: [] }
}

const cities = (state = CITIES.cities, { type, payload }) => {  
  switch (type) {
    case ADD_CITY:
      if (state.find((city) => city.id === payload.id)) return state
      else return [...state, { id: payload.id, text: payload.text }]
    case REMOVE_CITY:
      return [...state].filter((city) => city.id !== payload.id)
    case SORT_CITIES:
      return [...state].sort((a, b) =>
        a.id > b.id ? payload.sort_direction : b.id > a.id ? -1 * payload.sort_direction : 0
      )
    default:
      return state
  }
}

export default cities
