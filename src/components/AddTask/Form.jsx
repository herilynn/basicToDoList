const Form = () => {

    const addTaskHandler = (event) => {
     
        // event.target[0].value = ''
        // event.target[1].value = ''
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