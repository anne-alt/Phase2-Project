import React from "react";
import Joke from "./Joke";


function Jokes({data}) {
    const someJokes=data.slice(0,6)

    const postJokes= someJokes.map((item => <Joke key={item.id} setup={item.setup} delivery={item.delivery} category={item.category}/>))

    return (
        <div className="jokescontainer">
            {postJokes}
        </div>

    )
}

export default Jokes;