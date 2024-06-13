import Task from "./Task";

const List = ({tasks}) => {
    return (
        <div className="list">

            {
                tasks.map(({name, time, complete}) => (
                
                    <Task
                    name = {name}
                    time = {time}
                    complete={complete}
                    />))
            }

            {/* <Task/> */}
        </div>
    )
}

export default List