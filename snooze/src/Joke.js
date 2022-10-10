import React from "react";

function Joke({setup, delivery, category}) {
    return(
        <div>
            <p>{setup}</p>
            <p>{delivery}</p>
            <button>{category}</button>
        </div>
    )
}

export default Joke;