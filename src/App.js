import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ChildApp from './ChildApp'
//import childApp from './childApp.js';

function App(props) {
let [count,setcount] = useState(0);




let [BackColour, seBackColour] = useState(true)
    return (
  <div id={`${BackColour ? `rw-BackgrounColorLb` : ``}`}>

     <ChildApp Count={count}></ChildApp>
    
    <br />
    <button onClick={() =>{setcount(++count);}}>{count} time press Button</button>
    <button onClick={() =>{seBackColour(!BackColour);}}>Change Back Colour</button>
   
  </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
 
}

export default App;
