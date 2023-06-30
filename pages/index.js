
import Layaut from "@/components/Layaut";
import { useTasks } from "@/context/taskContext";
import { useRouter } from "next/router";
import {BsTrash} from "react-icons/bs";

function Home() {

    // const { hello, dato, greet } = useContext(TaskContext);
    const {task, deleteTask} = useTasks()

    const {push} = useRouter()
   


  return (
        <Layaut
            >
            <div
                className="bg-gray-900 text-white flex justify-center w-full"
            >
                    {task.length==0 ? (<h2>There are not Tasks.</h2>): (
                     <div className="w-7/12">       
                     {task.map((item, i) => (
                                <div className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-between items-center"
                                    key={item.id}
                                    onClick={()=>{push(`/edit/${item.id}`)}}
                                    >

                                    <span className="text-7xl align-middle mr-5">{i}</span>    
                                    <div
                                        className="w-full"
                                        >
                                        <div className="flex justify-between">
                                            <h1 className="font-bold">{item.title}</h1>
                                            <button className="rounded-lg px-5 py-3 bg-red-700 hover:bg-gray-400 flex items-center "
                                                    // onClick={()=>{ console.log(item.id);
                                                    onClick={(e)=> {
                                                        e.stopPropagation();
                                                        deleteTask(item.id);
                                                        push('/');
                                                    }}
                                            ><BsTrash
                                                className="mr-2 text-2xl"
                                            />Delete</button>
                                        </div>
                                        <p className="text-gray-400">{item.description}</p>
                                        <span className="text-gray-500" >{item.id}</span>
                                    </div>
                                </div>
                
                ))}
                </div>)
                 }
            </div>    
        </Layaut>
  )
}

export default Home