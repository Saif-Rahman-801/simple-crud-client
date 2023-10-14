import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const Users = () => {
  const lodadedUsers = useLoaderData();
  console.log(lodadedUsers);
  const [users, setUsers] = useState(lodadedUsers);

  const handleDlt = (id) => {
    alert("Deleted ", id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("data Deleted successfully");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDlt(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
