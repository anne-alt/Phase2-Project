import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Suggestions from "./Suggestions";
import Options from "./Options";

function Activity() {
    const[data, setData] = useState([])
    const[search, setSearch] = useState("")

    const types = ['education', 'recreational', 'social', 'music', 'cooking', 'diy', 'relaxation']

    
    useEffect(() => {
    types.map((type) => {
      fetch(`http://www.boredapi.com/api/activity?type=${type}`)
      .then(res => res.json())
      .then(info => {
        data.push(info)
        setData(data)
       
    })  
    })}, []) 

    return(
        <div>
            <Navbar/>
            < Search search={search} setSearch={setSearch}/>
            <Options/>
            <Suggestions data={data}/>
        </div>
    )
}

export default Activity;
