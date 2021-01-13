import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

//components
import Nav from './Nav'
import Welcome from "./Welcome";
import Login from './Login';
import Register from './Register'

function App() {
  const [users, setUsers] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [session, setSession] = useState(null);

  const fetchUsers = async () => {
    const fetchUsers = await fetch("http://localhost:5000/users/");
    const jsonRes = await fetchUsers.json();
    setUsers(jsonRes);
  }

  useEffect(() => {
    console.log('inside useEffect. Fetching...')
    fetchUsers();
  },[])

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
