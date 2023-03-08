import React, {useState, useEffect} from 'react'
import axios from 'axios';
const ENDPOINT = "http://localhost:3000";
function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const userData = await axios.get(`${ENDPOINT}/users`);
    setUsers(userData.data);
  }

  useEffect(() => {
    if(users?.length === 0){
      getUsers();
    }
  }, [users])

  return (
    <div>

    </div>
  )
}

export default Users