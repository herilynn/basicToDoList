// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/TaskList';
import NewTask from './components/AddTask';
import { useState } from 'react';

function App() {

  const tasks = [
    {name: 'test1', time: new Date('2024-06-30T09:31:00'), id: '1'},
    {name: 'test1', time: new Date('2024-06-30T09:30:00'), id: '2'},
    {name: 'test1', time: new Date('2024-06-30T09:33:00'), id: '3'}
];

  tasks.sort((a, b) => a.time.getTime() - b.time.getTime())


  const [allTasks, setAllTasks] = useState(tasks)

  const removeTask = (id) => {
    const updatedTasks = allTasks.filter(item => item.id !== id)
    setAllTasks(updatedTasks)
  }

  const addTask = (newTaskData) => {
    const updatedTasks = [...allTasks]

    const indexPos = updatedTasks.findIndex(task => task.time > newTaskData.time)

    const insertIndex = indexPos !== -1 ? indexPos : updatedTasks.length

    updatedTasks.splice(insertIndex, 0, newTaskData) //0 needed when adding for splice or it would just remove the inserted

    setAllTasks(updatedTasks)
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <NewTask onAddTask = {addTask}/>
      <Tasks tasks={allTasks} onRemoveHandler = {removeTask}/>
    </div>
  );
}

export default App;
