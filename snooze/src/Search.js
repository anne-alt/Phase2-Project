import React from "react";

function Search({search, setSearch}) {

    return (
        <div>
           <input
            type="text"
            placeholder="How many participants?"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
           />
           <select>
            <option>Educational</option>
            <option>Recreational</option>
            <option>Social</option>
            <option>Cooking</option>
            <option>Relaxation</option>
            <option>Busywork</option>
            <option>DIY</option>
            <option>Music</option>
           </select>
        </div>
    )
}

export default Search;