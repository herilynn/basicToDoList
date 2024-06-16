const Form = ({onAddTask}) => {

    const addTaskHandler = (event) => {

        event.preventDefault() //to avoid refreshing to see form components

        const taskName = event.target.elements['taskName'].value 
        const taskTime = event.target.elements['taskTime'].value 

        onAddTask(taskName, taskTime)
     
        event.target.elements['taskName'].value = '' //to reset task
        event.target.elements['taskTime'].value = '' //to reset time
    }

    return (
        <form className="task-form" data-testid="task-form" onSubmit={addTaskHandler}>
            <input type="text" name="taskName" className="new-task-name" placeholder="Enter Task" required/>

            <input type="datetime-local" name="taskTime" className="new-task-time" placeholder="YYYY-MM-DD-THH-mm" required/>

            <button type="submit"> Add Task </button>
        </form>
    )
}

export default Form