import React from 'react'
import { useEffect , useState } from 'react'
import './styles.css'
import Comment from '../components/Comment'


function Comments() {
    
  const [comments, setComments] = useState(false)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
    .catch(err => console.log(err))
  },[])

  return (
    <>
    <Comment/>
    </>
  )
}

export default Comments