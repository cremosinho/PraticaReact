import { Component } from "react";

import Button from "../Button";

import '../../style/organize.css'
import './styles.css'

import load from '../../util/loadPosts'
import TextInput from "../TextInput";
import Posts from "../Posts";

export default class Feed extends Component{
    
    state = {
        posts : [],
        allPosts : [],
        page: 0,
        postsPerPage: 15,
        searchValue : ''
    }

    componentDidMount(){
        this.loadPosts();
    }

    loadPosts = async () => {
        
       const listPosts = await load()
        this.setState({
            posts:listPosts.slice(0, 10),
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

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({searchValue : value})
    }

    render(){
        const{page, postsPerPage, allPosts, posts, searchValue} = this.state;
        const noMorePosts = page + postsPerPage >= allPosts.length;
        const filteredPosts = !!searchValue ? posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase())) : posts
        return(
            <div className="container">
                {!!searchValue && 
                    <>
                        <h1 className="search_header">Search Value: {searchValue}</h1>
                    </>
                }
                
                <TextInput onTextChange={this.handleChange} searchText={searchValue}/>
              
                <br /> <br /> <br />
                {filteredPosts.length > 0 && (
                    <>
                        <div className="is_grid feed">
                            <Posts posts={filteredPosts}/>
                        </div>
                    </>
                )}
                {filteredPosts.length === 0 && (<p>Não existem posts =&#40;</p>)}
                { noMorePosts ? null : <Button 
                text={'Carregar mais'} 
                clicar={this.loadMorePosts}
                disbled={noMorePosts}
                />}
            </div>
        )
    }
}