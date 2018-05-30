import React from "react";
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to="/" className="navbar-brand"> Post-App</Link >
            <div className="collapse navbar-collapse" id="navbarsExample02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/posts" className="nav-link">Posts</Link >
                    </li>
                    <li className="nav-item">
                        <Link to="/comments" className="nav-link">Comments</Link >
                    </li>
                    <li className="nav-item">
                        <Link to="/users" className="nav-link">Users</Link >
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;