import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [session, setSession] = useState(null)

  useEffect(() => {
    console.log('inside useEffect. Fetching...')
    async function fetchUsers() {
      const fetchUsers = await fetch("http://localhost:5000/users/");
      const jsonRes = await fetchUsers.json();
      setUsers(jsonRes);
    }
    fetchUsers();
  },[])

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
