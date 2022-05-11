import React, {useState} from 'react'
import  ReactDOM  from 'react-dom';
import './modalStyles.css';

const Modal = ({modalContent,setModalContent, showStatus, modalClose, id, modalSaveHandler}) => {
    const onSaveHandler = () => {
      modalSaveHandler(id, modalContent);
      modalClose();
    }
    
    if(!showStatus) return null; 
    
    return ReactDOM.createPortal(
    <div className='modal'>
      <div>
      <h2>EDIT YOUR TASK HERE!</h2>
      </div>
      <input className='modal-input' type="text" value={modalContent} onChange= {(e)=> setModalContent(e.target.value)} />
      {/* <div className='modal-content'>{modalContent}</div> */}
      <div className='btn-close'>
      <button onClick={modalClose}>Cancel</button>
      <button onClick={ onSaveHandler }>Save</button>
      </div>
    </div>,
    document.getElementById('portal')
    )
}

export default Modal
