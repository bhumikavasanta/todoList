import React from 'react'

const TodoList = (props) => {
  const { task, deleteTask, index } = props;
  return (
    <li className="list-item">
      {task}
      <span className='icons'>
      <i class="fa-solid fa-trash icon-delete" onClick={e=>{
        deleteTask(index)
      }}></i>
      </span>
    </li>
  )
}

export default TodoList