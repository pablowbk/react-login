import React from 'react';
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation();
  //console.log(location)
  
  return (
    <nav>
      <h4>MERN App</h4>
      <ul className='nav-links'>
        {location.pathname !== '/' && <Link to='/'><li>Home</li></Link> }
        {location.pathname === '/' && <Link to='/login' style={{marginRight:'1rem'}}><li>Login</li></Link>}
        {location.pathname === '/' && <Link to='/register'><li>Register</li></Link>}
      </ul>
    </nav>
  )
}

export default Nav
