import axios from "axios";

export default async function blogs({ params }: { params: { postId: string } }) {
    const postId = (await params).postId;
    let res
    let data
    // try {
    //      res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //      data = res.data;
        
    // } catch (error) {
    //     console.error(error)
    // }



    return(
        <div>
            Blog Page {postId}
            <br />
            <div>
                {/* {data.title} */}
            </div>
        </div>
    )
}