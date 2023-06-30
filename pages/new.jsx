import Layaut from '@/components/Layaut'
import { useTasks } from '@/context/taskContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


function TaskFormPage() {

    
    
    const[taskLocal, SetTaskLocal]=useState({
        title: "",
        description: ""
    })
    
    const { task, createTask, updateTask } = useTasks()                  
    const {push, query} = useRouter();  
                     

   const handleChange=(e)=>{
        SetTaskLocal({...taskLocal,
        [e.target.name]: e.target.value,
        })
   } 


   const handleSubmit = (e)=>{
        e.preventDefault();

        if (!query.id) {
                createTask(taskLocal.title, taskLocal.description);
            } else {
            updateTask(query.id, taskLocal.title, taskLocal.description);
            }
        push('/')
    }

    useEffect(() => {
        if(query.id) {
            let chore=task.find(item=>item.id==query.id)
            SetTaskLocal({title: chore.title, description: chore.description})
        }
    }, [])
    

        
            
 return (
    <Layaut
        className=''    
        >
        <form
            onSubmit={handleSubmit} 
            className='mx-auto flex-col w-7/12'           
        >
            <h1
                className='text-white text-lg font-black mb-3'
                >{ query.id ? 'Edit Task': 'Create Task'}</h1>
            <input 
                    className='bg-gray-800 focus: text-gray-100 focus:outline-none w-full py-3 px-4 mb-5' 
                    name="title"
                    type="text" 
                    placeholder='Write a Title.'
                    autoFocus
                    onChange={(e)=>handleChange(e)}
                    value={taskLocal.title}
                    
            />
            <textarea 
                className='bg-gray-800 focus: text-gray-100 focus:outline-none w-full py-3 px-4 mb-5' 
                title="description"
                name='description'
                rows="2"
                // placeholder='Write a Description.'
                placeholder= { (taskLocal.description=="")? 'Write a Description': taskLocal.description} 

                onChange={(e)=>handleChange(e)}
                value={taskLocal.description}
                >
            </textarea>
            <button
                className='rounded-lg px-4 py-2 bg-red-900 text-white hover:bg-gray-400 disabled:opacity-30 '
                disabled={!taskLocal.title}
           >Save</button>
        </form>
    </Layaut>
  )
}

export default TaskFormPage;