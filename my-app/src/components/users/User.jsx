
import React from 'react'

function Post({users}) {
  return (
    <div>
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
    </div>
  )
}

export default Post