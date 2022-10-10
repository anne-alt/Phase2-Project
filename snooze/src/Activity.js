import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Jokes from "./Jokes";
import Form from "./Form";
import Variety from "./Variety";

function Activity() {
    const[data, setData] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:3000/jokes')
      .then(res => res.json())
      .then(info => setData(info))
    }, []) 

    return(
        <div>
            <Navbar/>
            <Form/>
            <Jokes data={data}/>  
            {/* <Variety data={data} setData/>  */}
        </div>
    )
}

export default Activity;
