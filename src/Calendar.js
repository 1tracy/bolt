import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Awards from './Awards';
import './App.css';
import './Calendar.css';

function Calendar() {

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
        <div >
            <h1 className='calendarTitle'>a look at your week</h1>
            <div>
                <h1 className='calendar1'></h1>
                <h1 className='sundayTasks'>0</h1>
                <h1 className='calendar2'></h1>
                <h1 className='mondayTasks'>3</h1>
                <h1 className='calendar3'></h1>
                <h1 className='tuesdayTasks'>6</h1>
                <h1 className='calendar4'></h1>
                <h1 className='wednesdayTasks'>8</h1>
                <h1 className='calendar5'></h1>
                <h1 className='thursdayTasks'>10</h1>
                <h1 className='calendar6'></h1>
                <h1 className='fridayTasks'>11</h1>
                <h1 className='calendar7'></h1>
                <h1 className='saturdayTasks'>{RetrieveArray()}</h1>
            </div>
            <h1 className='sunday'>SUN </h1>
            <h1 className='monday'>MON</h1>
            <h1 className='tuesday'>TUES</h1>
            <h1 className='wednesday'>WED</h1>
            <h1 className='thursday'>THUR</h1>
            <h1 className='friday'>FRI</h1>
            <h1 className='saturday'>SAT</h1>
            <h1 className='firstConclude'>you've completed </h1>
            <h1 className='secondConclude'> {38 + RetrieveArray()} tasks</h1>
            <h1 className='thirdConclude'>this week!</h1>

            <nav>
                <Link to='/awards'>
                    <button className='btn-award'>
                    <h1 className='award'>Awards</h1>
                    </button>
                </Link>
            </nav>


        </div>

    )
}
export default Calendar;