import Task from "./Task";

const List = ({tasks, onRemoveHandler}) => {
    
    return (
        <div className="list">
            {
                tasks.map(({name, time, id, isChecked}) => (
                
                    <Task
                        key={id}
                        name = {name}
                        time = {time}
                        id = {id}
                        isChecked={isChecked}
                        onRemoveHandler = {onRemoveHandler}
                    />))
            }
        </div>
    )
}

export default List