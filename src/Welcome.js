import React from 'react';
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className='Welcome'>
      <h1>Welcome, friend.</h1>
      <section>
        <Link to='/login'><h3>Login</h3></Link>
        <Link to='/register'><h3>Register</h3></Link>
      </section>
    </div>
  )
}

export default Welcome;