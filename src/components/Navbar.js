import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    let {title} = props

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            {/* <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Pricing</a>
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
