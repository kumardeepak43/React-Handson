import './App.css';

import ClassComp from './components/ClassComp';
import React from 'react';
import funComp from './components/funComp';

class App extends React.Component{
  state = {
    showfun : false,
    showClass : false

  }

  render(){
    return (
      <div className="App">
        <p><h1>React styling using class and functional components</h1></p>
      <div className='btn-container'>
        <button className='btn'onClick={()=>this.setState({showfun: !this.showfun})}>click to see class component</button>
        <button className='btn'onClick={()=>this.setState({showClass: !this.state.showClass})}>click to see class component</button>
      </div>
      <div className='comp-container'>
        {this.state.showClass &&<ClassComp/>}

        {this.state.showfun && <funComp/>}

      </div>
      </div>
    )
  }
}
export default App;