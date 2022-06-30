import React, { useState } from "react";
import Modal from "../Popup/Modal";

function Post({ posts }) {
  const [modal, setModal] = useState(false);
  const [postsModal, setPostsModal] = useState([]);

  const toggleModal = (userId) => {
    setModal(!modal);
    const postM = posts.filter((post) => post.userId === userId);
    setPostsModal(postM);
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
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => (
              <tr onClick={() => toggleModal(post.userId)} key={post.id}>
                <td>{post.userId} </td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              
              </tr>
            ))}
        </tbody>
      </table>
      <Modal modal={modal} postsModal={postsModal} toggleModal={toggleModal} />
    </div>
  );
}

export default Post;