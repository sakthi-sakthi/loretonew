import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner-img">
      <Link to={'/'}>
        <img src="assets/images/loretonewlogo.jpg" className="img-fluid w-100 h-100" alt="Responsive" />
      </Link>
    </div>
  )
}

export default Banner

