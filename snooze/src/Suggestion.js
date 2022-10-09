import React from "react";

function Suggestion({activity, type, participants}) {
    return (
        <div id="act">
            <h3>Activity: {activity}</h3>
            <p>Type: {type}</p>
            <p>Participants: {participants}</p>
        </div>
    )
}

export default Suggestion;