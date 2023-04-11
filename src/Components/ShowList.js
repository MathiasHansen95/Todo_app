import React, {useEffect, useState} from 'react'
import Todo from "./Todo";
import * as Constants from "./Constants"


    function ShowList(){
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
        function removeTodo(id){
            setTodos(todos.filter(todo => todo.id !==id));
        }
        return (
            <div className="App">
                <header className="App-header">
                    <h1>TodoList</h1>
                    <ol>
                        {todos.map(todo => (
                            <Todo key={todo.id} todo={todo}
                                  removeTodo={removeTodo}  />
                        ))}
                    </ol>
                </header>
            </div>
        )
    }

    export default ShowList