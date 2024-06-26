import './App.css';
import Header from './components/Header';
import Tasks from './components/TaskList';
import NewTask from './components/AddTask';
import { useState, useEffect } from 'react';

function App() {

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [
    { name: 'Technical Evaluation with JB&B', time: new Date('2024-06-16T23:59:00'), id: '1' },
    { name: 'JB&B Offer Email!', time: new Date('2024-06-18T00:00:00'), id: '2' },
    { name: 'Celebrate Getting Offer~', time: new Date('2024-06-21T19:30:00'), id: '3' }
  ];

  const [allTasks, setAllTasks] = useState(tasks)

  const removeTask = (id) => {
    const updatedTasks = allTasks.filter(item => item.id !== id)
    setAllTasks(updatedTasks)

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  const addTask = (newTaskData) => {
    const updatedTasks = [...allTasks, { ...newTaskData, completed: false }];
    setAllTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  

  useEffect(() => {
    const sortedTasks = [...allTasks].sort((a, b) => {

      const timeComparison = new Date(a.time).getTime() - new Date(b.time).getTime();

      if (timeComparison !== 0) {
        return timeComparison;
      }
      return a.id - b.id; //in the case the times are the same; it would place new tasks that have earlier and later times in the correct position cause sorting would order by time first 
    });
  
    const tasksEqual = (task1, task2) => {
      if (task1.length !== task2.length) {
        return false;
      }
  
      for (let i = 0; i < task1.length; i++) {
        if (task1[i].id !== task2[i].id) {
          return false;
        }
      }
  
      return true;
    };
  
    if (!tasksEqual(allTasks, sortedTasks)) {
      setAllTasks(sortedTasks);
      localStorage.setItem('tasks', JSON.stringify(sortedTasks));
    }
  }, [allTasks]);
  

  return (
    <div className="App">
      <Header/>
      <NewTask onAddTask = {addTask}/>
      <Tasks tasks={allTasks} onRemoveHandler = {removeTask}/>
    </div>
  );
}

export default App;
