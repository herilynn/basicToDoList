import List from "./List";
import './style.css';

const Tasks = ({tasks}) => {
    return (
        <div className="tasks">
            <List tasks = {tasks}/>
        </div>
    )
}

export default Tasks