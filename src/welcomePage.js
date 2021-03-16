import React from 'react';
import './App.css';

function welcome() {
    return (
        <div >
            <h1 className = 'welcomePageIntro'>Welcome to Incrementum</h1>
            <img src = '/images/image 2.png' alt = "tree" className = 'welcomePageImg' ></img>
            <button className = 'btn-startNow'>Start Now</button>

        </div>
    )
}
export default welcome;