import React from "react";

function Suggestion({activity, type, participants}) {
    return (
        <div>
            <h3>{activity}</h3>
            <p>{type}</p>
            <p>{participants}</p>
        </div>
    )
}

export default Suggestion;