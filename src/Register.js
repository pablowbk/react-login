import React from "react";

function Register() {
  return (
    <div className='Register'>
      <header>
        <h1>Sign up</h1>
        <h3>Become a valued member, today!</h3>
      </header>
      <form>
        <div className='username-input input'>
          <label>Username: </label>
          <input type='text'/>
        </div>
        <div className='email-input input'>
          <label>Email Address: </label>
          <input type='email' />
        </div>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
