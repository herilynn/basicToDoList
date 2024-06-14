import Task from "./Task";

const List = ({tasks, onRemoveHandler}) => {
    return (
        <div className="list">

            {
                tasks.map(({name, time, id}) => (
                
                    <Task
                        name = {name}
                        time = {time}
                        id = {id}
                        onRemoveHandler = {onRemoveHandler}
                        // complete={complete}
                    />))
            }

            {/* <Task/> */}
        </div>
    )
}

export default List