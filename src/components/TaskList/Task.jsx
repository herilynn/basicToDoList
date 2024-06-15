import React, {useState} from "react"

const Task = ({name, time, id, completed, onRemoveHandler}) => {

    const RemoveHandler = () => {
        onRemoveHandler(id)
    }

    const [isChecked, setIsChecked] = useState(completed)

    const handleCheckBox = () => {
        setIsChecked(!isChecked)

        // const taskEle = document.querySelector('.task') DON'T USE THIS; ONLY GRABS THE 1ST TASK
        // taskEle.classList.toggle('complete')
        const updatedTasks = JSON.parse(localStorage.getItem("tasks")).map((task) =>
            task.id === id ? { ...task, completed: !isChecked } : task
        )
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    const formattedTime = new Date(time).toLocaleString()

    return (
        <div className={`task ${isChecked ? "complete" : ""}`}>
            <label>
                <input type="checkbox" checked = {isChecked} onChange={handleCheckBox}/>
                {isChecked ? 'Complete!' : 'Incomplete'}
            </label>
            <div>
                <div className="task-name">{name}</div>
                <div className="task-time">{formattedTime}</div>
            </div>
            <button type="submit" onClick={RemoveHandler}>Remove</button>
        </div>
    )
}

export default Task