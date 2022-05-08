import React, {useState} from 'react'
import  ReactDOM  from 'react-dom';
import './modalStyles.css';

const Modal = ({modalContent, showStatus, modalClose, id, modalSaveHandler}) => {
    // const initialText = modalContent;
    // const [editText, setEditText] = useState(modalContent);
    const [editText, setEditText] = useState('task value');
    // console.log(editText);
    
    const onSaveHandler = () => {
      modalSaveHandler(id, editText);
    }
    
    console.log(id); //this gives undefined only 
     
    
    if(!showStatus) return null;
    // console.log('modal component called')
    
    return ReactDOM.createPortal(
    <div className='modal'>
      <div>
      <h2>Edit your task here!</h2>
      </div>
      <input className='modal-input' type="text" value={editText} onChange= {(e)=> setEditText(e.target.value)} />
      {/* <div className='modal-content'>{modalContent}</div> */}
      <div className='btn-close'>
      <button onClick={modalClose}>Close</button>
      <button onClick={ onSaveHandler }>Save</button>
      </div>
    </div>,
    document.getElementById('portal')
    )
}

export default Modal
