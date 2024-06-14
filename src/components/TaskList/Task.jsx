import React, {useState} from "react"

const Task = ({name, time, complete, id}) => {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBox = () => {
        setIsChecked(!isChecked)

        const taskEle = document.querySelector('.task')
        taskEle.classList.toggle('complete')
        
    }

    return (
        <div className="task">
            <label>
                <input type="checkbox" checked = {isChecked} onChange={handleCheckBox}/>
                {isChecked ? 'Complete!' : 'Incomplete'}
            </label>
            <div className="task-name">{name}</div>
            <div className="task-time">{time}</div>
            <button type="submit">Remove</button>
        </div>
    )
}

export default Task