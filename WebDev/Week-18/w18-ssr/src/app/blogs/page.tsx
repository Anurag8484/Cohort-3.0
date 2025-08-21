import axios from "axios"

async function getBlogs(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return res.data;
}

export default async function Blogs(){
    const blogs = await getBlogs();
    return(
        <div>
           {JSON.stringify(blogs)}
        </div>
    )
}