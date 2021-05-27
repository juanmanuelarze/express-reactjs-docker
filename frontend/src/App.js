import './App.css';
import logo from './logo.svg';
import {useState, useEffect} from 'react';
import TaskItem from './components/TaskItem/TaskItem'
import {fetchTasks, finishTask} from './utils/TasksUtil';
import Modal from './components/Modal/Modal';

function App() {

  const [tasksList, setTasksList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [taskLength, setTaskLength] = useState(3);
  const [modalState, setModalState] = useState(false);
  const [task, setTask] = useState(null);

  useEffect(async ()=>{

    setLoading(true);

    const tasks = await fetchTasks(taskLength);
    setTasksList(tasks);

    setLoading(false);

  }, [taskLength]);

  const showTask = (task)=>{
    setTask(task)
    setModalState(true)
  }

  const complete = async ()=>{

    const done = await finishTask(task.uuid);

    if(done)
      updateTaskState();

    return;

  }

  const updateTaskState = ()=>{

    const updatedList = tasksList.map((item)=>{

      if(item.uuid === task.uuid)
        item.state = 1;

      return item;

    });

    setTasksList(updatedList);

  }

  return (
    <div className="App">
      <Modal task={task} modalState={modalState} close={()=>setModalState(false)} complete={complete}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <header className="container-header">
          {loading && 
          <img src={logo} className="loading" alt="logo" />
          }
          {!loading && 
          <div></div>}
          <select onChange={element=>setTaskLength(element.nativeEvent.target.value)}>
            <option value={3}>3</option>
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
            <option value={15}>15</option>
            <option value={18}>18</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </header>
        <div className="list-container">
          {tasksList.map((task, index)=><TaskItem key={index} task={task} showTask={showTask}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
