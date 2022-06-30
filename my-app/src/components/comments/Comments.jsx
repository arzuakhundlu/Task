import React from "react";
import { useEffect, useState } from "react";
import "../styles.css";
import Comment from "./Comment";
import Pagination from "../Pagination";

function Comments() {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastComment = currentPage * perPage;
  const indexOfFirstComment = indexOfLastComment - perPage;

  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <>
      <Comment comments={currentComments} />
      <Pagination
        perPage={perPage}
        total={comments.length}
        paginate={paginate}
      />
    </>
  );
}

export default Comments;
