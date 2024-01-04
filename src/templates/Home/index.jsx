import './styles.css';
import { Component } from 'react';
import Feed from '../../components/Feed';
import '../../style/style.css'

export default class Home extends Component {
  render (){
    //const {name} = this.state
    return ( 
      <div className='bg-gray'>
        <Feed/>
        {
          /*<div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p onClick={this.handleClick}>
                {name}
              </p>
            </header>
          </div>*/
        }
      </div>
     
    )
  }   
}
