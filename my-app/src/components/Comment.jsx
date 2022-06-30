import React from 'react'

function Comment({comments}) {
  return (
    <div>
        
       <table border={2}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Body</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
                {comments && comments.map( comment => (

            <tr key={comment.id}>
                <td>{comment.name}</td>
                <td>{comment.body}</td>
                <td>{comment.email}</td>
            </tr>
                ))}
            
        </tbody>
       </table>
    </div>
  )
}

export default Comment