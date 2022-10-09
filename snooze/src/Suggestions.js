import React from "react";
import Suggestion from "./Suggestion";


function Suggestions({data}) {
    const acts = data.map((item) => <Suggestion key={item.key} activity={item.activity} type={item.type} participants={item.participants}/>     
    )
    return (
        <div id="stuff">
            {acts}
        </div>
    )
}

export default Suggestions;