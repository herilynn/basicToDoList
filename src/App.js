import './App.css';
import Header from './components/Header';
import Tasks from './components/TaskList';
import NewTask from './components/AddTask';
import { useState, useEffect } from 'react';

function App() {

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [
    { name: 'test1', time: new Date('2024-06-30T09:31:00'), id: '1' },
    { name: 'test1', time: new Date('2024-06-30T09:30:00'), id: '2' },
    { name: 'test1', time: new Date('2024-06-30T09:33:00'), id: '3' }
  ];

  const [allTasks, setAllTasks] = useState(tasks)

  const removeTask = (id) => {
    const updatedTasks = allTasks.filter(item => item.id !== id)
    setAllTasks(updatedTasks)

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  const addTask = (newTaskData) => {
    const updatedTasks = [...allTasks, newTaskData]

    setAllTasks(updatedTasks)

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  useEffect(() => {
    const sortedTasks = [...allTasks].sort((a, b) => {
      
      return new Date(a.time).getTime() - new Date(b.time).getTime()
    })

    const tasksEqual = (task1, task2) => {
      
      if (task1.length !== task2.length) {
        return false
      }

      for (let i = 0; i < task1.length; i++) {
        
        if (task1[i].id !== task2[i].id) {
          return false
        }

        return true
      }
    }

    if (!tasksEqual(allTasks, sortedTasks)) {
      setAllTasks(sortedTasks)
      localStorage.setItem('tasks', JSON.stringify(sortedTasks));
    }
    
  }, [allTasks])

  return (
    <div className="App">
      <Header/>
      <NewTask onAddTask = {addTask}/>
      <Tasks tasks={allTasks} onRemoveHandler = {removeTask}/>
    </div>
  );
}

export default App;
