import { useEffect, useState } from "react";
import { Post } from "./Post";

function App() {

  const [posts,setPosts] = useState([]);

  // const posts = [
  //   {
  //     name: "harkirat",
  //     subtitle: "10000 followers",
  //     time: "2m ago",
  //     image:
  //       "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
  //     description: "Haha Danger 2.0",
  //   },
  // ];



  const postComponents = posts.map(post => <Post
    name = {post.name}
    subtitle= {post.subtitle}
    time = {post.time}
    image = {post.image}
    description = {post.description}
    />)

  function addPost() {
    setPosts([...posts,{
      name: "Harkirat2",
      subtitle: "50012300 +followers",
      time: "1444m ago",
      image:
        "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "Cohort 3.0",
    }])

  }


  function delPost(){
    setPosts(c=>c.slice(0, -1))
  }
  return (
    <div
      style={{
        background: "#dfe6e9",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <button type="button" onClick={addPost}>
            Add Post
          </button>
          <button type="button" onClick={delPost}>
            Delete Post
          </button>
          <div>
            {postComponents}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
