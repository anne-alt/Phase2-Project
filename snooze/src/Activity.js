import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Jokes from "./Jokes";

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
            <Jokes data={data}/>   
           
        </div>
    )
}

export default Activity;
