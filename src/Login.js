import React, {useState, useEffect} from "react";

function Login() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    const fetchUsers = async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + '/users');
        const jsonRes = await res.json();
        setUsers(jsonRes);
        setLoading(false);
      }
      fetchUsers()
    }, [])

  return (
    <div className='Login'>
      <h1>Logged in!</h1>
      <section>
        <h3>List of active users:</h3>
        {loading ? <p>loading...</p> : <ul>{users.map(user => <li key={user._id}><p><span>{user.username}</span> =&gt; <span>{user.email}</span></p></li> )}</ul>}
        
      </section>
    </div>
  )
}

export default Login;