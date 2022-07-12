import React, { Fragment } from 'react'

import Header from './components/Header/header'

const App = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
)

export default App
