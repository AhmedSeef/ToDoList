import { useState } from "react";
import "./CreateName.css";

function CreateName({onAdd}){
    const [term, setTerm] = useState("");
    const handleChange=(event)=>{
        setTerm(event.target.value);
    };
    const SendTo = ()=>{       
        onAdd(term);
    }
    return(<div>
        <input onChange={handleChange}/>
        <button className="btn" onClick={SendTo}>Add name</button>
    </div>)
}

export default CreateName;