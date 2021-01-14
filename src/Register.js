import React, {useState, useEffect} from "react";

function Register() {
  const [userInput, setUserInput] = useState({'username': '', 'email': ''})

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userInput)
    })
    .then((response) => response.json())
    .then((result) => console.log(result))
  }
  
  const handleInputChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className='Register'>
      <header>
        <h1>Sign up</h1>
        <h3>Please enter your log in information and register.</h3>
      </header>
      <form>
        <div className='username-input input'>
          <label className='usernameLabel' style={userInput.username !== '' ? {opacity: 0} : {opacity: 1}}>User Name</label>
          <input type='text' name='username' onChange={handleInputChange} value={userInput.username} required placeholder="use only letters" />
          <span className='infoTip'>Choose a user name, using only letters (minimum of 6 characters long)</span>
        </div>
        <div className='email-input input'>
          <label className='emailLabel' style={userInput.email !== '' ? {opacity: 0} : {opacity: 1}}>Email Address</label>
          <input type='email' name='email' onChange={handleInputChange} value={userInput.email} required placeholder="example@email.com" />
          <span className='infoTip'>Enter your email adddress. (minimum of 6 characters long)</span>
        </div>
        <button onClick={handleFormSubmit}>Register</button>
      </form>
    </div>
  )
}

export default Register
