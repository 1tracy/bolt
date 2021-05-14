import React from 'react';

const ToDo = ( {text, todo, todos, setTodos} ) => {
    // events
    const deleteHandler = () => {
        console.log(todo);
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}; 

export default ToDo;