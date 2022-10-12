import React from "react";

function Joke({setup, delivery, category}) {
    return(
        <div className="eachJoke">
            <p>{setup}</p>
            <p>{delivery}</p>
            <button className="jokes">{category}</button>
        </div>
    )
}

export default Joke;