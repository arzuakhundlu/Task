import React from 'react'
import { useEffect , useState } from 'react'
import '../styles.css'


function Users() {
    
  const [users, setUsers] = useState(false)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.log(err))
  },[])

  return (
    <>
       <table border={2}>
        <thead>
            <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Phone Number</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
                {users && users.map( user => (

            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
            </tr>
                ))}
            
        </tbody>
       </table>
    
    </>
  )
}

export default Users