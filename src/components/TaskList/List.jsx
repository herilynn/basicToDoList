import Task from "./Task";
import '../../App.css';

const List = ({tasks, onRemoveHandler}) => {
    
    return (
        <div className="list">
            {
                tasks.map(({name, time, id, completed}) => (
                
                    <Task
                        key={id}
                        name = {name}
                        time = {time}
                        id = {id}
                        completed = {completed}
                        onRemoveHandler = {onRemoveHandler}
                    />))
            }
        </div>
    )
}

export default List