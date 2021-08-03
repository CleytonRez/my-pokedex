import React from "react"

function Pokemon(props) {
    return (
        <img src={props.url} alt="bulbasaur" className="pokemon"></img>

    )
}

export default Pokemon