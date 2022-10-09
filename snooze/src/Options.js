import { type } from "@testing-library/user-event/dist/type";
import React from "react";


function Options() {

    return(
        <div className="choose">
            <select>
            <option>education</option>
            <option>recreational</option>
            <option>social</option>
            <option>cooking</option>
            <option>relaxation</option>
            <option>busywork</option>
            <option>diy</option>
            <option>music</option>
           </select>
           
       </div>
    )
}

export default Options