
import React, { useState } from 'react'
// import ModalWindow from './ModalWindow';
import Modal from './Modal';


const ToDoList = ( {data, clickHandler, modalSaveHandler} ) => {

  const [showModal,setShowModal] = useState(false);
  const [currEditID, setCurrEditID] = useState();
  const [content, setContent] = useState();

  const deleteList = (input) => {
      clickHandler(input);
  }
  
  const editHandler = (id, title) => {
      setShowModal(true);
      setCurrEditID(id);
      setContent(title);    
  }

  const modalClose = () => {
      setShowModal(false);
  }
 
  // console.log(content);
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
                setModalContent = {setContent}
        />
    </div>
  )
}

export default ToDoList

