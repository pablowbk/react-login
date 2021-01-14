import React from "react";

function Register() {
  handleFormSubmit() {

  }
  
  return (
    <div className='Register'>
      <header>
        <h1>Sign up</h1>
        <h3>Please enter you log in information and register.</h3>
      </header>
      <form>
        <div className='username-input input'>
          <label>Username: </label>
          <input type='text' required placeholder="use only letters" />
        </div>
        <div className='email-input input'>
          <label>Email Address: </label>
          <input type='email' required placeholder="example@email.com" />
        </div>
        <button onClick={handleFormSubmit}>Register</button>
      </form>
    </div>
  )
}

export default Register
