import { useState, useEffect } from "react";
import axios from "axios";

export function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function login() {
    if (user.email && user.password) {
      try {
        const res = await axios.post("http://localhost:3001/users/login",{}, {
          headers: {
            email: user.email,
            password: user.password,
          },
        });
        alert(res.data.token);
        console.log(res.data);
      } catch (error) {
        console.log(error)
      }
    } else {

        console.log("kuch to hai")
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  return (
    <div>
      <input
        name="email"
        type="text"
        value={user.email}
        placeholder="email"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleInputChange}
        placeholder="password"
      />
      <br />
      <br />
      <button onClick={login}>SignIn</button>
    </div>
  );
}
