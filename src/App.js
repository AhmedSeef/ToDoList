import NameShow from './NameShow.js';
import CreateName from './CreateName.js';
import { useState } from "react";
import "./App.css";

function App() {
    const [names, setNames] = useState([]);
const OnAddToList = (name)=>{
    console.log(name)
    setNames([...names, name]);
   
}

    
    const handleNames =  names.map((name,index)=>{
        return <NameShow name={name} key={index} />
    })
    return (
    <div id="app"> 
        <CreateName onAdd={OnAddToList}/>
        <ul className="list">{handleNames}</ul>
    </div>)
}

export default App;