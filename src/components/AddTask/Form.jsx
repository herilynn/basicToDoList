const Form = ({onAddTask}) => {

    const addTaskHandler = (event) => {

        event.preventDefault() //to avoid refreshing to see form components

        const taskName = event.target[0].value 
        const taskTime = event.target[1].value 

        onAddTask(taskName, taskTime)
     
        event.target[0].value = '' //to reset task
        event.target[1].value = '' //to reset time
    }

    return (
        <form action="" className="task-form" onSubmit={addTaskHandler}>
            <input type="text" name="" id="" className="new-task-name" placeholder="Enter Task"/>

            <input type="datetime-local" name="" id="" className="new-task-time" placeholder="YYYY-MM-DD-THH-mm-ss"/>

            <button type="submit"> Add Task </button>
        </form>
    )
}

export default Form