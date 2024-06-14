const Task = ({name, time, complete}) => {

    return (
        <div className="task">
            <div className="task-name">{name}</div>
            <div className="task-time">{time}</div>
            <div className="completion">{complete}</div>
            <button type="submit">Remove</button>
        </div>
    )
}

export default Task