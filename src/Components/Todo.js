import React from "react";

function Todo({todo, removeTodo}){


    function handleRemoveClick(){
        removeTodo(todo.id)
    }

    return (
        <div style={{display: "flex"}}>
        <ol style={{
            color: "white",
        }}>
            {todo.task}</ol>
            <input type="checkbox"/>
        <button onClick={handleRemoveClick}>delete</button>
        </div>
    );
}

export default Todo