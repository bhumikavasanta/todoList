import React, { useState } from 'react'

const TodoInput = (props) => {

    const { addTask } = props;
    const [task, setTask] = useState("");

    const handleEnterPress = (e) => {
      if(e.keyCode===13) {
        addTask(task);
        setTask("");
      }
    };

    const handleAddTask = () => {
      addTask(task);
      setTask("");
    };

  return (
    <div className='input-container'>
        <input
          type="text"
          value={task}
          className="input-box-todo"
          placeholder='Enter Task'
          onChange={(e)=>setTask(e.target.value)}
          onKeyDown={handleEnterPress}/>
        <button
          className="add-btn" 
          onClick={handleAddTask}>
            Add Task
        </button>
    </div>
  )
}

export default TodoInput