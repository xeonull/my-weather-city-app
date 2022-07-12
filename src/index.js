import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store';

import CityWeather from './components/CityWeather/cityWeather'
import CityFilter from './components/CityFilter/cityFilter'
import Error from './components/Error/error'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route exact path="/" element={<CityFilter />} />
          <Route path="/cities/:id" element={<CityWeather />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
