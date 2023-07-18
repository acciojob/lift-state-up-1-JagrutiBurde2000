import React, { useState } from 'react';

function Parent() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="parent">
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
      <h1>Modal Content</h1>
      <p>This is the modal content.</p>
    </div>
  );
}

export default Parent;