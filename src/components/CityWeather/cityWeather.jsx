import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Card from '../Card/card'

import './cityWeather.css'

export default function CityWeather() {
  const APP_KEY = 'a9a3a62789de80865407c0452e9d1c27' //5aa741a37ff6512516bcb3da3ea973f0
  const [weather, setWeather] = useState({ days: [], city: {} })
  const [reqError, setReqError] = useState('')
  const { id } = useParams()

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${id}&lang=en&units=metric&APPID=${APP_KEY}`
    )
    const data = await response.json()
    if (data.cod === '200') {
      const dailyData = data.list.filter((reading) =>
        reading.dt_txt.includes('12:00:00')
      )
      const days = dailyData
      const city = data.city
      setWeather({ days, city })
    } else {
      setReqError(`Error: ${data.message} (Code: ${data.cod})`)
    }
  }

  useEffect(() => {
    getWeather()
  }, [id])

  return (
    <div className="">
      <h1 className="title-block">5-day weather forecast</h1>
      {weather.city.name && (
        <h2 className="title-block">{`${weather.city.name} (${weather.city.country})`}</h2>
      )}
      {reqError !== '' ? (
        <h2>{reqError}</h2>
      ) : (
        <div className="row justify-content-center">
          {weather.days.map((day, index) => (
            <Card day={day} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}
