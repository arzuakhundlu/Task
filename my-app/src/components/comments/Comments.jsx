import React from "react";
import { useEffect, useState } from "react";
import "../styles.css";
import Comment from "./Comment";
import PaginationComments from "./PaginationComments";

function Comments() {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;

  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Comment comments={currentComments} />
      <PaginationComments
        commentsPerPage={commentsPerPage}
        totalcomments={comments.length}
        paginate={paginate}
      />
    </>
  );
}

export default Comments;
