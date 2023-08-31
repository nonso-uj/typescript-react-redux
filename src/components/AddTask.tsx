import { useState } from "react"
import { useAppDispatch } from "../utils/hooks";
import { addTask } from "../redux/taskCrud";



const AddTask = () => {
    const [task, setTask] = useState<string>('')
    const dispatch = useAppDispatch()
    

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(task)

        if(!task){
            alert("ADD A tASK!!!")
            return
        }

        const newTask = {title: task, completed: false}

        dispatch(addTask(newTask))
        // const addTask = async (newTask: TaskProps) => {
        //     const res = await fetch('http://localhost:5000/tasks', {
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body: JSON.stringify(newTask),
        //     })

        //     const data = await res.json()
        //     console.log(data)
        // }

        // addTask(newTask)
        setTask('')

    }

  return (
    <>
        <div>AddTask</div>
        <form onSubmit={onSubmit} method="post">
            <input name="task" type="text" placeholder="Add Task" value={task} onChange={(e) => setTask(e.target.value)}/>
            <input type="submit" value="submit" />
        </form>
    </>
  )
}

export default AddTask