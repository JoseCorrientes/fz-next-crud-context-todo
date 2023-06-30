import {AiOutlinePlusCircle} from 'react-icons/ai'
import Link from 'next/link';
import {useRouter} from'next/router';
import { useTasks } from '@/context/taskContext';



function Layaut({children}) {

  const router = useRouter()

  const {task} = useTasks();
    
  return (
    <div
        className="h-screen bg-gray-900"
    >
        <header
            className="flex item-center bg-gray-800 text-white px-28 py-5 ">
            <Link href='/'
                legacyBehavior
            >
                <a>
                    <h1
                        className="font-black text-lg"
                        >Task App
                    <span
                        className='ml-2 text-gray-400 font-bold'
                    >{task.length} Tareas</span>
                    </h1>
                </a>  
            </Link>
            <div
                className="flex-grow text-right"
            >
                <button
                    className='rounded-xl bg-green-900 font-bold hover:bg-stone-600 hover:text-black px-5 py-2 inline-flex items-center' 
                    onClick={()=>router.push('/new')}
                >Add Task <AiOutlinePlusCircle
                                className='ml-2 fill-blue-300'
                            />
                </button>
            </div>
        </header>
        <main
            // className="px-28 py-10 bg"
            className="px-0 py-0 mt-10"
        >
            {children}        
        </main>
        
    </div>
        

  )
}


export default Layaut