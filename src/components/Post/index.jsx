import { Component } from "react";
import './styles.css'

export default class Post extends Component{
    render(){
        return(
            <div className="card-post">
                <img src={`${this.props.img}`} alt='hello world'/>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
            </div>
        )
    }
}