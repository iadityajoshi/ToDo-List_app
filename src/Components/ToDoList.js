
import React from 'react'

const ToDoList = ( {data, clickHandler} ) => {
  // console.log(data);
  const deleteList = (input) => {
      // console.log(input);
      clickHandler(input);
  } 
  return (
    <div>
       {data.map((item) => (
        <li key={item.id} className='list'>{item.title}
        <div>
          <button onClick={ () => {deleteList(item.id)}}  className='listButtons'>Delete</button>
        </div>
        </li>
        ) )}
    </div>
  )
}

export default ToDoList

