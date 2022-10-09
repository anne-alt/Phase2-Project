import React from "react";
import Suggestion from "./Suggestion";


function Suggestions({activity, type, participants}) {
    return (
        <div id="stuff">
            <Suggestion activity={activity} type={type} participants={participants}/>     
        </div>
    )
}

export default Suggestions;