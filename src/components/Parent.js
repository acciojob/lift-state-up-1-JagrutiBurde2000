import React, { useState } from 'react';

function Parent() {
    const [showModal, setShowModal] = useState(false);
  
    const handleClick = () => {
      setShowModal(true);
    };
  
    return (
      <div className="parent">
        <h1>Parent Component</h1>
        <h3>Child Component</h3>
        <Child showModal={showModal} handleClick={handleClick} />
      </div>
    );
  }
  
function Child(props) {
  return (
    <div>
      <button onClick={props.handleClick}>Show Modal</button>
      {props.showModal && <Modal />}
    </div>
  );
}

function Modal() {
    return (
      <div className="modal">
        <h4>Modal Content</h4>
        <p>This is the modal content.</p>
      </div>
    );
  }

export default Parent;
