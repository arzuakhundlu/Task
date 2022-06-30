import React from 'react'

function Post({posts}) {
  return (
    <div>
         <table border={2}>
        <thead>
            <tr>
              <th>UserId</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
                {posts && posts.map( post => (

            <tr key={post.id} >
              <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
                ))}
            
        </tbody>
       </table>
    </div>
  )
}

export default Post