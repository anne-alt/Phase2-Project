import React, {useState, useEffect} from "react";
import Search from "./Search";
import Suggestions from "./Suggestions";

function Activity() {
    const[data, setData] = useState([])

    useEffect(() => {fetch('http://www.boredapi.com/api/activity/') 
    .then(res => res.json())
    .then(info => setData(info))}, []) 

    return(
        <div>
            < Search/>
            <Suggestions/>
        </div>
    )
}

export default Activity;
