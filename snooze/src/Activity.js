import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Suggestions from "./Suggestions";
import Options from "./Options";

function Activity() {
    const[data, setData] = useState([])
    const[search, setSearch] = useState("")

    useEffect(() => {fetch('http://www.boredapi.com/api/activity?type') 
    .then(res => res.json())
    .then(info => setData(info))}, []) 

    return(
        <div>
            <Navbar/>
            < Search search={search} setSearch={setSearch}/>
            <Options/>
            <Suggestions activity={data.activity} type={data.type} participants={data.participants}/>
        </div>
    )
}

export default Activity;
