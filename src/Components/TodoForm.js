import React, {useEffect, useState} from "react"
import { v4 as uuidv4} from 'uuid';

function TodoForm({addTodo}){


    const [todo, setTodo] = useState({
        id: "",
        task: "",
    })


    function handleTaskInputChange(e){
    setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();

        if(todo.task.trim()){
            addTodo({...todo, id: uuidv4() });
            setTodo(({...todo, task: "" }))
        }
    }

    function onButtonClickHandler()  {
        window.alert('succsses')
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
            />
            <button onClick={onButtonClickHandler} type="submit">submit</button>
        </form>
    )

}

export default TodoForm