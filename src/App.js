import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    console.log('inside useEffect. Fetching...')
    fetch("http://localhost:5000/users/", 
    { mode: "cors",
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(json => console.log(json))

  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, friend.</h1>
        <section>
          <h3>Login</h3>
          <h3>Register</h3>
        </section>
      </header>
      
    </div>
  );
}

export default App;
