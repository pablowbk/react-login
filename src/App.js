import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

//components
import Nav from './Nav'
import Welcome from "./Welcome";
import Login from './Login';
import Register from './Register'
import Background from './Background'

function App() {
  //const [isLogged, setIsLogged] = useState(false);
  //const [session, setSession] = useState(null);

  return (
    <BrowserRouter>
      <Nav />
      <Background />
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
