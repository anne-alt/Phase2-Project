import React, {useState, useEffect} from "react";
import Everything from "./Everything";
// import Joke from "./Joke";


function Variety() {

    const[data, setData] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:3000/jokes')
      .then(res => res.json())
      .then(info => setData(info))
    }, []) 


    return(
        <div>
            <Everything data={data}/>
        </div>

    )
}

export default Variety;