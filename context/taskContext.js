import { createContext, useContext, useState } from "react";
import {v4 as uuid} from 'uuid';

export const TaskContext=createContext();

export const TaskProvider = ({children})=>{
    //aca van los estados a guardar
    const [task, setTask] = useState([])

    const createTask = (title, description) => {
        setTask([...task, {id:uuid(), title, description}]);
    }

    const deleteTask = (id )=>{
        const result = task.filter(item=>item.id!==id);
        setTask(result);
    }

    const updateTask = (id, title, description)=>{
        const indice = task.findIndex(item=>item.id===id);
        let copy = task
        copy[indice].title= title;
        copy[indice].description= description;
        setTask(copy)
    }
    
    return(
        <TaskContext.Provider 
            value={{task, createTask, deleteTask, updateTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = ()=>useContext(TaskContext);