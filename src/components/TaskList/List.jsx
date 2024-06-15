import Task from "./Task";

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
                        // isChecked={isChecked}
                        completed = {completed}
                        onRemoveHandler = {onRemoveHandler}
                    />))
            }
        </div>
    )
}

export default List