import { useState, useEffect } from "react";
import axios from "axios";

export function Signup() {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  function handleInputChange(e) {
      const { name, value } = e.target;
    setNewUser((prev) => ({
        ...prev,
        [name]: value,
    }));
}
async function addUser() {
    // if(newUser.email && newUser.name && newUser.password){
    //     const res = await axios.post("http://localhost:3000/users/signup",newUser);
    //     alert("User Created")
    //     setNewUser({name:'',password:'',email:''})
    // }else{
    //     alert("Something fishy happend !")
    // }

    if (newUser.name && newUser.email && newUser.password) {
      try {
        const response = await axios.post(
          "http://localhost:3001/users/signup",
          newUser
        );
        alert("User created!");
        setNewUser({ name: "", email: "", password: "" }); // clear form
      } catch (error) {
        console.error("Error adding user:", error);
        if (error.response) {
          alert(`Server error: ${error.response.data.message}`);
        } else {
          alert("Network error. Please try again.");
        }
      }
    } else {
      alert("Please fill in all fields");
    }
}

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={newUser.name}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <input
        name="email"
        type="text"
        value={newUser.email}
        placeholder="email"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        value={newUser.password}
        onChange={handleInputChange}
        placeholder="password"
      />
      <br />
      <br />
      <button onClick={addUser}>Signup</button>
    </div>
  );
}
