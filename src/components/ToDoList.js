import React from 'react';

// importing components
import ToDo from './ToDo';

const ToDoList = ({todos, setTodos, filterTodos}) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map(todo => (
                    <ToDo 
                    setTodos={setTodos} 
                    todos={todos} 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;