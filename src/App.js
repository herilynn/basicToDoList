// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/TaskList';

function App() {

  const tasks = [
    {name: 'test1',
    time: 'test2',
  complete: 'no'}

  ]

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
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
