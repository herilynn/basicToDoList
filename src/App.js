// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/TaskList';
import { useState } from 'react';

function App() {

  const tasks = [
    {name: 'test1', time: new Date('2024-06-30T09:31:00'), complete: 'no', id: '1'},
    {name: 'test1', time: new Date('2024-06-30T09:30:00'), complete: 'no', id: '2'},
    {name: 'test1', time: new Date('2024-06-30T09:33:00'), complete: 'no', id: '3'}
];

  tasks.sort((a, b) => a.time - b.time)


  const [allTasks, setAllTasks] = useState(tasks)

  const removeTask = (id) => {
    const updatedTasks = allTasks.filter(item => item.id !== id)
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
      <Tasks tasks={allTasks} onRemoveHandler = {removeTask}/>
    </div>
  );
}

export default App;
