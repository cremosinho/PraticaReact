import Post from "../Post"
export default function Posts (props){
    return(  
        <>
            {props.posts.map(post => (
                <Post key={post.id}
                img={post.img}
                title={post.title}
                body={post.body}/>)
                )}
        </>
    )
}