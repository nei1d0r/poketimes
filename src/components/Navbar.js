import React from 'react';
// import specific nav components from react
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo left" to="/">Poke' Times</Link>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)
