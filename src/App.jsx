import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Feed from './components/Feed';
import './components/css/style.css'

class App extends Component {
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

export default App;
