import React from "react";
import "./Modal.css";

export default function Modal({ toggleModal, postsModal, modal }) {
  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Posts</h2>
            <div>
              {postsModal.map((post) => (
                <div key={post.id}>
                  <hr />
                  <p>{post.title}</p>
                  {/* <p>{post.body}</p> */}
                </div>
              ))}
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
