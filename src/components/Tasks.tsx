import { useEffect } from "react"
import Task from "./Task"
import { TaskProps } from "../utils/types"
import { getTasks } from "../redux/taskCrud"
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { selectTasks } from "../redux/taskSlice"


const Tasks = () => {
    const dispatch = useAppDispatch()
    let tasks = useAppSelector(selectTasks)

    console.log(tasks)

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])
    

    return (
        <div>
            <h3>Tasks</h3>
            {tasks.slice(0).reverse().map((task:TaskProps) => (
                <Task key={task.id} {...task} />
            ))}
        </div>
    )
}

export default Tasks