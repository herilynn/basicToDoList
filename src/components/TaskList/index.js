import List from "./List";

const Tasks = ({tasks}) => {
    return (
        <div className="tasks">
            <List tasks = {tasks}/>
        </div>
    )
}

export default Tasks