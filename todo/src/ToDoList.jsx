import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList(){
    let [toDos, setToDos] = useState([{task:"Sample Task", id: uuidv4(), done: false}]);
    let [newToDo, setNewTodo] = useState("");

    let addNewTask = () => {
        setToDos((task) => {
            return [...task, {task:newToDo, id: uuidv4(),done: false}]
        });
        setNewTodo("");
    };

    let updateToDo = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteToDo = (id) => {
        setToDos(toDos.filter((task) => task.id != id));
    };

    let markAsDone = (id) => {
        setToDos((tasks) => 
            tasks.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo, done: !todo.done
                    };
                }else{
                    return todo
                }
            })
        );
    }

    let styles = {
        textDecoration: "line-through"
    };

    return(
        <div>
            <input 
                placeholder= "task to do" 
                onChange={updateToDo} 
                value={newToDo} />

            <button onClick={addNewTask}>Add</button>

            <br /><br /><br /><br />

            <h3>To Do List</h3>
            <ul>
                {
                    toDos.map((todo) => (
                        <li key={todo.id} style={todo.done ? styles : null}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteToDo(todo.id)}>Delete</button>{/*TO ensure that the deleteToDo 
                            function doesn't get exucuted just by giving the id we use the arrow function */}
                            <button onClick={() => markAsDone(todo.id)}>Done</button>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}