import React, {useState, useEffect} from "react";

function Login() {
  const [users, setUsers] = useState([]);

  const api_url = process.env.REACT_APP_API_URL

  const fetchUsers = async () => {
    const fetchUsers = await fetch(api_url);
    const jsonRes = await fetchUsers.json();
    setUsers(jsonRes);
  }

  useEffect(() => {
    fetchUsers();
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

export default Login
