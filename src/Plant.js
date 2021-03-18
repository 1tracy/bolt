import React, { useState, useEffect } from "react";
import './App.css';

function Plant() {
    const RetrieveArray = () => {
        const tasks = JSON.parse(localStorage.getItem('todos'));
        const totalTasks = Object.values(tasks).flat().length;
        console.log(tasks);
        console.log(totalTasks);
        return totalTasks;
    }
    useEffect(() => {
        RetrieveArray();
    }, []);

    return (
        <div>
            <h1 className = 'title'>Your Tree</h1>
            <h2>You have completed {RetrieveArray()} tasks, complete {50 - RetrieveArray()} more tasks to grow your tree.</h2>

            <div className="plantimg" />
        </div>
        
    )
}
export default Plant;