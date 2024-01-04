import Post from "../Post"
export default props => (  
        <>
            {props.posts.map(post => (
                <Post key={post.id}
                img={post.img}
                title={post.title}
                body={post.body}/>)
                )}
        </>
)