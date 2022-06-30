import React from "react";
import { useEffect, useState } from "react";
import "../styles.css";
import User from "../users/User";
import Pagination from "../Pagination";

function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastUser = currentPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;

  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <>
      <User users={currentUsers} />
      <Pagination
        perPage={perPage}
        total={users.length}
        paginate={paginate}
      />
    </>
  );
}

export default Users;
