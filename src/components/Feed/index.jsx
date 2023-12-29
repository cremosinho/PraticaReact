import { Component } from "react";

import Post from "../Post";
import Button from "../Button";

import '../../css/organize.css'
import './styles.css'

import load from '../../util/loadPosts'

export default class Feed extends Component{
    
    state = {
        posts : [],
        allPosts : [],
        page: 0,
        postsPerPage: 15,
    }

    componentDidMount(){
        this.loadPosts();
    }

    loadPosts = async () => {
        
       const listPosts = await load()
        this.setState({
            posts:listPosts.slice(0, 5),
            allPosts: listPosts
        })
    }

    loadMorePosts = () =>{
        const{page, postsPerPage, allPosts, posts} = this.state
        const nextPage = page + postsPerPage
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
        posts.push(...nextPosts)
        this.setState({posts, page : nextPage})
    }

    render(){
        const{page, postsPerPage, allPosts, posts} = this.state;
        const noMorePosts = page + postsPerPage >= allPosts.length;
        return(
            <div className="container">
                <div className="is-grid feed">
                    {posts.map(post => (
                        <Post key={post.id}
                        img={post.img}
                        title={post.title}
                        body={post.body}/>)
                        )}
                </div>
                { noMorePosts ? null : <Button 
                text={'Carregar mais'} 
                clicar={this.loadMorePosts}
                disbled={noMorePosts}
                />}
            </div>
        )
    }
}