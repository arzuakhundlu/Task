import React from "react";
import "./Modal.css";

export default function Modal({ toggleModal, commentsModal, modal }) {
  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Comments</h2>
            <div>
              {commentsModal.map((comment) => (
                <div key={comment.id}>
                  <hr />
                  <p>{comment.name}</p>
                  {/* <p>{comment.body}</p> */}
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
