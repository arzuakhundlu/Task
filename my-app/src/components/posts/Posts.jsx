import React from "react";
import { useEffect, useState } from "react";
import "../styles.css";
import Post from "../posts/Post";
import Pagination from "../Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <>
      <Post posts={currentPosts} />
      <Pagination
        perPage={perPage}
        total={posts.length}
        paginate={paginate}
      />
    </>
  );
}

export default Posts;
