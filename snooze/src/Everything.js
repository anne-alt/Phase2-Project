import React from "react";
import Joke from "./Joke";

function Everything({data}) {

    const everything = data.map(item => <Joke key={item.id} setup={item.setup} delivery={item.delivery} category={item.category}/>)

    return( 
        <div className="all">
        {everything}
        </div>
    )

}

export default Everything;