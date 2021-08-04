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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    )
}