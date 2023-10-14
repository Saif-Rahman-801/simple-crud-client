import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

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
        }
      });
  };

  return (
    <div>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email}
          <button onClick={() => handleDlt(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
