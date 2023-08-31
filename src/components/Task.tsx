import { TaskProps } from "../utils/types"

const Task = ( {id, title, completed}: TaskProps ) => {
  return (
    <div>
        <h3>{id} - {title}</h3>
        <p> {`${completed}`} </p>
        <hr />
    </div>

  )
}

export default Task