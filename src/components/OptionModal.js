import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen = {!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOptions}
            contentLabel = "Selected Option"
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClearSelectedOptions}>Okay</button>
        </Modal>
    )    
};

export default OptionModal;