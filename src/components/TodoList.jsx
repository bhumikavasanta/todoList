import React from 'react'

const TodoList = (props) => {
  const { task, deleteTask, index } = props;
  return (
    <li className="list-item">
      <div>
      <div className='task-name'>{task.name}</div>
      <div>{task.timeStamp.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  })}</div>
      </div>
      <span className='icons'>
      <i className="fa-solid fa-trash icon-delete" onClick={e=>{
        deleteTask(index)
      }}></i>
      </span>
    </li>
  )
}

export default TodoList