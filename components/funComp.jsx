import React from 'react';
import './funComp.css';

function funComp(){
    return(
        <div>
            <div className='fun-div'>
                <h2>A Functional Component</h2>
                <strong className='TextOne'>Complted a external part</strong><br /><br />
                <strong style={{color :'yellowgreen'}}>Done inline css</strong>
            </div>
        </div>
    )
}


export default funComp;