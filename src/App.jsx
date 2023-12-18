import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {

  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    if (task !== "") {
      setTaskList([...taskList, task]);
    } else {
      alert("Enter Task");
    }
  };

  const deleteTask = (key) => {
    let newTaskList = [...taskList];
    newTaskList.splice(key, 1);
    setTaskList([...newTaskList]);
  };

  return (
    <div className="main-container">
      <div className='center-container-outer'>
      <div className='center-container'>
        <h1 className="app-heading">
          Todo List
        </h1>
        <TodoInput addTask={addTask} />
        {
          taskList.map((item, i) => {
            return (
              <TodoList
                key={i}
                task={item}
                deleteTask={deleteTask}
                index={i}
              />
            )
          })
        }
      </div>
      </div>
    </div>
  );
}

export default App;
