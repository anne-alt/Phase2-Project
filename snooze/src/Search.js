import React from "react";

function Search() {
    return (
        <div>
           <input
            type="text"
            placeholder="How many participants?"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
           />
           <input
            type="text"
            placeholder="What type of activity?"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
           />
        </div>
    )
}

export default Search;