import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to='/calendar'>
                    <button className="btn-calendar"></button>
                </Link>
                <Link to='/plant'>
                    <button className="btn-tree"></button>
                </Link>
                <Link to='/todo'>
                    <button className="btn-todo"></button>
                </Link>
                <Link to='/settings'>
                    <button className="btn-settings"></button>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;