import React, {useState} from "react"

const Task = ({name, time, id, onRemoveHandler}) => {

    const RemoveHandler = () => {
        onRemoveHandler(id)
    }

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBox = () => {
        setIsChecked(!isChecked)

        // const taskEle = document.querySelector('.task') DON'T USE THIS; ONLY GRABS THE 1ST TASK
        // taskEle.classList.toggle('complete')
        
    }

    const formattedTime = new Date(time).toLocaleTimeString()

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