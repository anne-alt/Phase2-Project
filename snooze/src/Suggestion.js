import React from "react";

function Suggestion({activity, participants, type}) {
    return (
        <div>
            <h3>{activity}</h3>
            <p>{participants}</p>
            <p>{type}<p/>
        </div>
    )
}

export default Suggestion;