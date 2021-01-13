import React, {useState, useEffect} from "react";

function Login() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const fetchUsers = await fetch("http://localhost:5000/users/");
    const jsonRes = await fetchUsers.json();
    setUsers(jsonRes);
    console.log(users)
  }

  useEffect(() => {
    console.log('inside useEffect. Fetching...')
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
