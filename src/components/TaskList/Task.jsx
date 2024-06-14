import React, {useState} from "react"

const Task = ({name, time, id}) => {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBox = () => {
        setIsChecked(!isChecked)

        // const taskEle = document.querySelector('.task') DON'T USE THIS; ONLY GRABS THE 1ST TASK
        // taskEle.classList.toggle('complete')
        
    }

    return (
        <div className={`task ${isChecked ? "complete" : ""}`}>
            <label>
                <input type="checkbox" checked = {isChecked} onChange={handleCheckBox}/>
                {isChecked ? 'Complete!' : 'Incomplete'}
            </label>
            <div>
                <div className="task-name">{name}</div>
                <div className="task-time">{time}</div>
            </div>
            <button type="submit">Remove</button>
        </div>
    )
}

export default Task