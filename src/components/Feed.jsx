import { Component } from "react";
import Post from "./Post";
import './css/organize.css'
import './css/style.css'

export default class Feed extends Component{
    
    state = {
        posts : [],
    }

    componentDidMount(){
        this.loadPosts();
        console.log('hello world')
    }

    loadPosts = async () => {
        const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
        const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
        const [posts] = await Promise.all([postsResponse]);
        const [photos] = await Promise.all([photosResponse])

        const postsJson = await posts.json();
        const photosJson = await photos.json();

        const posts_and_photos = postsJson.map((post, index) => {return {
            ...post, img: photosJson[index].url}
        })

        this.setState({posts:posts_and_photos})
    }

    render(){
        const {posts} = this.state;
        return(
            <div className="is-grid feed">
                {posts.map(post => (
                    <Post key={post.id}
                    img={post.img}
                    title={post.title}
                    body={post.body}/>)
                )}
            </div>
        )
    }
}