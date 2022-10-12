import React, {useState, useEffect} from "react";
import { Route, Routes, Router } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Form from "./Form";
import Variety from "./Variety";

function Activity() {
    const[data, setData] = useState([])
  
        return(
        <div>
            <Navbar/>
              <Routes>
                 <Route path="/Contribute" element = {<Form />} />
                 <Route path="/Variety" element={<Variety data={data} setData={setData}/>} />
                 <Route path="/" element={<Home data={data}/>} />
             </Routes>
        </div>
    )
}

export default Activity;
