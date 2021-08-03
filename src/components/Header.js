import React from "react"

function Header(props) {
    return (
        <div>
            <div className="Header">
                <h1>{props.title}</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" alt="pokebola" width="100px" height="100px"></img>

            </div>

            <div className="Body">
                <button type="button" className="buttonmenu">Card View</button>
                <button type="button" className="buttonmenu">Table View</button>
            </div>
        </div>
    )
}

export default Header