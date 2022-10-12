import React, {useState, useEffect} from "react";
import Form from "./Form";
import Jokes from "./Jokes";

function Home() {

    const[data, setData] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:3000/jokes')
      .then(res => res.json())
      .then(info => setData(info))
    }, []) 


    return(
        <div>
            <Form/>
            <Jokes data={data}/>
        </div>

    )
}

export default Home;