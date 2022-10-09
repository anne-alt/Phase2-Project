import React from "react";

function Search({search, setSearch}) {

    return (
        <div id="peeps">
           <input
            type="text"
            placeholder="How many participants?"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
           />
        </div>
    )
}

export default Search;