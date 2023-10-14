import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

function App() {
  const handleUsr = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = {
      email,
      name,
    };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Added successfully");
        }
        form.reset();
      });
  };
  return (
    <>
      <h2>Simple Crud</h2>
      <Header />
      <form onSubmit={handleUsr}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <Outlet />
    </>
  );
}

export default App;
