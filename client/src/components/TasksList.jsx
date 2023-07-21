import { useEffect,useState } from "react"
import { getAlltasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList(){
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    async function loadTasks(){
      const res = await getAlltasks()
      //console.table(res.data);
      setTasks(res.data);
    }
    loadTasks();
  },[])

  return(
    <div className="grid grid-cols-3 gap-3" >
      {tasks.map(task =>(
        <TaskCard key={task.id} task={task} />       
      ))}
    </div>
  )
}