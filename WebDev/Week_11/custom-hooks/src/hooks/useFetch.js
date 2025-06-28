
import { useState,useEffect } from "react";
import axios from "axios";

export function usePostTitle(){
 
    const [post, setPost] = useState({});

    async function getPosts() {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      setPost(res.data);
    }

    useEffect(() => {
      getPosts();
    }, []);
    return post.title
}


export function useFetch(url){
    const [finalData, setFinalData] = useState({});

    async function getDetails(){

        const res = await axios.get(url)
        setFinalData(res.data)        

    }

    useEffect(()=>{
        getDetails();
    },[url])
    
    return{
        finalData
    }

}