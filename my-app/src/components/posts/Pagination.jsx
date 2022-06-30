import React from 'react'
import '../styles.css'
function Pagination({postPerPage ,totalPosts, paginate}) {

    const pagesNumbers = [];
    for(let i = 1; i<=Math.ceil(totalPosts / postPerPage); i++){
        pagesNumbers.push(i)
    }

  return (
    <>
        <ul className='pagination'>
            {pagesNumbers.map(number =>(
                <li key={number} className='page-item'>
                    <a onClick={()=> paginate(number)} href="!#" className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Pagination