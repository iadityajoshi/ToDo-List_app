import React, { useState } from "react";
// import ModalWindow from './ModalWindow';
import Modal from "./Modal";

const ToDoList = ({ data, clickHandler, modalSaveHandler }) => {
  const [showModal, setShowModal] = useState(false);
  const [currEditID, setCurrEditID] = useState();
  const [content, setContent] = useState();

  const deleteList = (input) => {
    clickHandler(input);
  };

  const editHandler = (id, title) => {
    setShowModal(true);
    setCurrEditID(id);
    setContent(title);
  };

  const modalClose = () => {
    setShowModal(false);
  };
  
  return (
    <>
      {data.map((item) => (
        <li key={item.id} className='list'>
        <span className="list-title">{item.title}</span>
        <div className="button-container">
          <button onClick={ () => {deleteList(item.id)}}  className='listButtons'>Delete</button>
          <button className='listButtons' onClick={ ()=> {editHandler(item.id, item.title)} }>Edit</button>
        </div>
        </li>
      ))}

      {/* <ModalWindow id={currEditID} showStatus={showModal} /> */}
      <Modal
        id={currEditID}
        showStatus={showModal}
        modalContent={content}
        modalClose={modalClose}
        modalSaveHandler={modalSaveHandler}
        setModalContent={setContent}
      />
    </>
  );
};

export default ToDoList;
