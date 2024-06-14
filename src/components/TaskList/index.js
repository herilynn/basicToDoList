import List from "./List";
import './style.css';

const Tasks = ({tasks, onRemoveHandler}) => {
    return (
        <div className="tasks">
            <List tasks = {tasks} onRemoveHandler = {onRemoveHandler}/>
        </div>
    )
}

export default Tasks