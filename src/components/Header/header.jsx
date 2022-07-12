import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => <div className="header box-light"><Link to={`/`}>My Weather City App</Link></div>

export default Header
