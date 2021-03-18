import React from 'react';


const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => { 
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        document.getElementById('audio').play();
        console.log("submitted to handler");
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000, timestamp: new Date().getTime()}
        ]);

        setInputText("");

    };

    const statusHandler = (e) => {
      console.log(e.target.value);
      setStatus(e.target.value);

    }
    return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
    )
}

export default Form;