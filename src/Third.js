import React from "react";

export function Third(props){
    let number = parseInt(props.squaredNumber)
    return(
        <div>
            <h2>Second Child</h2>
            <h3>The square of {number} is = {number*number}</h3>
        </div>
    )
}