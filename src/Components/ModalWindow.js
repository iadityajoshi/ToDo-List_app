import React, {useState} from 'react'
import { Modal} from 'react-bootstrap';
import '../App.css'

const ModalWindow = ({id, title, showStatus}) => {
   const[show, setShow] = useState({showStatus});
    const handleModal = () =>{
      console.log('handleModal');
        setShow(!show);
   }
   const saveHandler = () =>{
      //on clicking save modal window should close and 
      //value of li element whose button was clicked should get updated
      //can use findidx method using id and then splice method to replace it with this new value
      //that is in parent component   
   }
  
    return (
    <div>  
        {/* <div className="modalClass">  
          <Button onClick={handleModal}>Click To Open Modal</Button>  
        </div>   */}
          
        <Modal show={show} onHide={()=>handleModal()}>  
          <Modal.Header closeButton>EDIT YOUR TASK!</Modal.Header>  
          <Modal.Body>
            <input type="text" value={title} placeholder='Edit here'/>
          </Modal.Body>  
          <Modal.Footer> 
            <button onClick={handleModal}>Close</button> 
            {/* <Button onClick={handleModal}>Close</Button>  
            <Button onClick={saveHandler}>Save</Button>   */}
          </Modal.Footer>  
        </Modal> 
    </div>
  )
}

export default ModalWindow
