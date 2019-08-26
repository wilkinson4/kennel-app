import React, { Component } from "react"
import NavBar from "./nav/Navbar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"

class Kennel extends Component {
    render() {
        return (
            <>
                <NavBar />
                <ApplicationViews />
            </>
        )
    }
}

export default Kennel