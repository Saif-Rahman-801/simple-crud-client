import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  const handleUsr = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const updatedUser = {
      email,
      name,
    };
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Updated");
        }
      });
  };
  return (
    <div>
      <h2>Update: {loadedUser.name} </h2>
      <form onSubmit={handleUsr}>
        <input type="text" name="name" id="" defaultValue={loadedUser?.name} />
        <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={loadedUser?.email}
        />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default Update;
