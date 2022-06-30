import React, { useState } from 'react'
import Modal from '../Popup/ModalComments'
function Comment({comments}) {
  const [modal, setModal] = useState(false);
  const [commentsModal, setCommentsModal] = useState([]);

  const toggleModal = (userId) => {
    setModal(!modal);
    const commentM = comments.filter((comment) => comment.userId === userId);
    setCommentsModal(commentM);
  };


if (modal) {
  document.body.classList.add("active-modal");
} else {
  document.body.classList.remove("active-modal");
}
  return (
    <div>
       <table border={2}>
        <thead>
            <tr>
              <th>PostId</th>
                <th>Name</th>
                <th>Body</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
                {comments && comments.map( comment => (

            <tr key={comment.id}  onClick={() => toggleModal(comment.userId)}>
                <td>{comment.postId}</td>
                <td>{comment.name}</td>
                <td>{comment.body}</td>
                <td>{comment.email}</td>
            </tr>
                ))}
            
        </tbody>
       </table>
      <Modal modal={modal} commentsModal={commentsModal} toggleModal={toggleModal} />

    </div>
  )
}

export default Comment