import React from "react";

function Search() {
    return (
        <div>
           <input
            type="text"
            placeholder="How many participants?"
           />
           <select>
            <option>Educational</option>
            <option>Recreational</option>
            <option>Social</option>
            <option>Cooking</option>
            <option>Relaxation</option>
           </select>
        </div>
    )
}

export default Search;