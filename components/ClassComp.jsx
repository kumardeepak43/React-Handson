import React from "react";
import './ClassComp.css'


class ClassComp extends React.
Component{


  render(){
    return(
        <div className='class-div'>
            <h2>Create class Component</h2>
            <strong className='TextTwo'> Using External css</strong><br /><br />
            <strong style={{color :'yellowgreen'}}> Inline css</strong>
        </div>
    )
  }
}
export default ClassComp;