import React from "react";
import Joke from "./Joke";


function Jokes({data}) {
    // const someJokes=data.splice(5,15)

    const postJokes= data.map((item => <Joke key={item.id} setup={item.setup} delivery={item.delivery} category={item.category}/>))

    return (
        <div>
            {postJokes}
        </div>

    )
}

export default Jokes;