import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {

  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem("taskList");
    try {
      const storedTasks = localStorage.getItem("taskList");
      if (storedTasks) {
        const parsed = JSON.parse(storedTasks);
        if (Array.isArray(parsed)) {
          return parsed.map((task) => ({
            ...task,
            timeStamp: new Date(task.timeStamp),
          }));
        }
      }
    } catch (err) {
      console.error("Failed to load taskList from localStorage:", err);
    }
    return [];
  });

  const addTask = (task) => {
    const newTask = {
      name: task,
      timeStamp: new Date(),
    }
    if (task !== "") {
      setTaskList([...taskList, newTask]);
    } else {
      alert("Enter Task");
    }
  };

  const deleteTask = (key) => {
    let newTaskList = [...taskList];
    newTaskList.splice(key, 1);
    setTaskList([...newTaskList]);
  };

  useEffect(()=>{
    localStorage.setItem("taskList",JSON.stringify(taskList));
  },[taskList]);

  return (
    <div className="main-container">
      <div className='center-container-outer'>
      <div className='center-container'>
        <h1 className="app-heading">
          Todo List
        </h1>
        <TodoInput addTask={addTask} />
        {
          taskList?.map((item, i) => {
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
