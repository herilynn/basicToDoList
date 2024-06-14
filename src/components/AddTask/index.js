import Form from "./Form";
import './style.css'

const NewTask = ({onAddTask}) => {

    const addTaskHandler = (taskName, taskTime) => {

        const addTask = {name: taskName, time:taskTime, id: Math.random()} 
        
        onAddTask(addTask)
    }

    return (
        <div className="new-task">
            <Form onAddTask = {addTaskHandler}/>
        </div>
    )
}

export default NewTask