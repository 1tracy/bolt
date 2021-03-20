import React, { useState, useEffect } from "react";
import './App.css';

// importing components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
    // state stuff
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all'); // default
    const [filterTodos, setFilterTodos] = useState([]);

    // run once when app starts
    useEffect(() => {
        getLocalTodos();
    }, []);

    // we can use useEffect so that when state changes, a function is run -> use to filter out visually
    // when todos changes, the function is run
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);


    // functions and events
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilterTodos(todos.filter(todo => todo.completed == true)); // filtering todos to be true
                break;
            case 'uncompleted':
                setFilterTodos(todos.filter(todo => todo.completed == false)); // filtering todos to be false
                break;
            default:
                setFilterTodos(todos);
                break;
        }
    };

    //saving to local storage
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    // retrieving data from local storage
    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            //console.log(todoLocal);
            setTodos(todoLocal);
        }
    }

    return (
        <div className="App">
            <div className='title_2'>
                <h1>Incrementum</h1>
            </div>
            <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}
                setStatus={setStatus} />
            <ToDoList filterTodos={filterTodos} setTodos={setTodos} todos={todos} />

            <div className="rect">Advertisement</div>
        </div>
    );
}

export default App;
