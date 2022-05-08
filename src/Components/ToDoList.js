
import React, { useState } from 'react'
// import ModalWindow from './ModalWindow';
import Modal from './Modal';


const ToDoList = ( {data, clickHandler, modalSaveHandler} ) => {

  const [showModal,setShowModal] = useState(false);
  const [currEditID, setCurrEditID] = useState();
  const [content, setContent] = useState();
  // console.log(data);
  const deleteList = (input) => {
      // console.log(input);
      clickHandler(input);
  }
  
  const editHandler = (id, title) => {
      console.log('before setting edit titel: '+content);
      setShowModal(true);
      setCurrEditID(id);
      setContent(title);    
  }
  console.log('edit task is: '+ content);
  console.log('id of edit task is: '+ currEditID);

  const modalClose = () => {
      setShowModal(false);
  }
  // console.log('to do list component called'); //to check why after clicking edit modal window not opening
  return (
    
    <div>
       {data.map((item) => (
        <li key={item.id} className='list'>{item.title}
        <div>
          <button onClick={ () => {deleteList(item.id)}}  className='listButtons'>Delete</button>
          <button className='listButtons' onClick={ ()=> {editHandler(item.id, item.title)} }>Edit</button>
        </div>
        </li>
        ) )}
        {/* <ModalWindow id={currEditID} showStatus={showModal} /> */}
        <Modal  id={currEditID} 
                showStatus={showModal} 
                modalContent={content} 
                modalClose={modalClose} 
                modalSaveHandler={modalSaveHandler}  
        />
    </div>
  )
}

export default ToDoList

