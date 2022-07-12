import { ADD_CITY, REMOVE_CITY, SORT_CITIES } from '../constants'

export const addCity = (id, text) => ({
  type: ADD_CITY,
  payload: { id, text },
})

export const removeCity = (id) => ({
  type: REMOVE_CITY,
  payload: { id },
})

export const sortCities = (sort_direction = 1) => ({
  type: SORT_CITIES,
  payload: { sort_direction },
})
