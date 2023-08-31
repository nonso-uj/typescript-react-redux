import axios from "axios";
import { failCall, startCall, successCall } from "./taskSlice"
import { TaskProps } from "../utils/types"

export const getTasks = () => (dispatch:any) => {
    dispatch(startCall());
    return axios
        .get("http://localhost:5000/tasks")
        .then(({ data }) => {
            console.log(data)
            dispatch(successCall(data))
        })
        .catch(err => {
            console.log(err)
            dispatch(failCall(err))
        })
} 


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

export const addTask = (newTask: TaskProps) => (dispatch:any) => {
    dispatch(startCall());
    console.log(newTask)
    return axios
        .post("http://localhost:5000/tasks", newTask)
        .then(({ data }) => {
            console.log(data)
            // dispatch(successCall(data))
            dispatch(getTasks())
        })
        .catch(err => {
            console.log(err)
            dispatch(failCall(err))
        })
} 
