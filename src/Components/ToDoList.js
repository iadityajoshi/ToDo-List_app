import React from 'react'

const ToDoList = ( {data} ) => {
  // console.log(data);
  return (
    <div>
       {data.map((item) => (
        <li key={item.id} className='list'>{item.title}</li>
        ) )}
    </div>
  )
}

export default ToDoList

