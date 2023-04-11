import TodoForm from "./TodoForm";
import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import * as Constants from "./Constants"

function Homepage(){

    let navigate = useNavigate();
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(Constants.LOCAL_STORAGE_KEY));
        if(storageTodos.length !==0){
            setTodos(storageTodos)
        }

    }, []);

    useEffect(() =>{
        localStorage.setItem(Constants.LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);


    function addTodo(todo){
        setTodos([todo, ...todos])
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>My TodoList</h1>
                <TodoForm addTodo={addTodo}/>
                <button onClick={() => {navigate("list")}}>Show List</button>
            </header>
        </div>
    )
}

export default Homepage