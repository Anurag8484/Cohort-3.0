
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
    const [loading,setLoading] = useState(true);

    async function getDetails(){
        console.log("here I am")
        setLoading(true);
        const res = await axios.get(url)
        setFinalData(res.data)        
        setLoading(false)
    }

    useEffect(()=>{
        getDetails();
    },[url])
  
    useEffect(()=>{
        let interval;
        interval = setInterval(getDetails, 5*1000)
        
        return ()=>clearInterval(interval)
        
    },[])
  

    return{
        finalData,
        loading
    }

}