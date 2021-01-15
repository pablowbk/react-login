import React, {useState, useEffect} from "react";

function Login() {
  const [users, setUsers] = useState([]);
  
  useEffect(()=> {
    const fetchUsers = async () => {
        const res = await fetch(process.env.REACT_APP_API_URL);
        const jsonRes = await res.json();
        setUsers(jsonRes);
      }
      fetchUsers()
    }, [])

  return (
    <div className='Login'>
      <h1>Logged in!</h1>
      <section>
        <h3>List of active users:</h3>
        <ul>
          {users.map(user => <li key={user._id}>{user.username}</li> )}
        </ul>
      </section>
    </div>
  )
}

export default Login;