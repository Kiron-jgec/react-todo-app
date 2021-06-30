import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal'

const OptionModal = (props)=>(
    <Modal
    isOpen={!!props.selectedOptions}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected option"
    closeTimeoutMS={200}
    className="modal"
     
     > 
    <h2 className="modal__title">Selected Option</h2>
    {props.selectedOptions && <p className="modal__body"> {props.selectedOptions}</p> }
    <button onClick={props.handleClearSelectedOption}  className="button">Okay</button>
    </Modal>
)



export default OptionModal




