import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>Website Homepage</h1>
        </div>
    )
}

export function About() {
    return (
        <div>
            <h1>About Page</h1>
        </div>
    )
}


export function Events() {
    return (
        <div>
            <h1>Events Page</h1>
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
        </div>
    )
}

export function Whoops404() {
    return (
        <div>
            <h1>This page does not exist</h1>
        </div>
    )
}

export function Nav() {
    return (
    <nav>
    <span className="row">
        <span className="col-1" align="left"><button className="btn btn-info "><Link to="/">Home</Link></button> </span>
        <span className="col-7" align="center" width="50px">
        <button className="btn btn-info"><Link to="/about">About</Link> </button>
        <button className="btn btn-info"><Link to="/events">Events</Link></button> </span>
        <span className="col-1" align="right"><button className="btn btn-info"><Link to="/contact">Contact</Link></button> </span>
    </span>
    </nav>
    )
}