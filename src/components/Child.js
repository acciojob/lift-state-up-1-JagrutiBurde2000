import React from 'react';
import Modal from './Modal'; // Make sure to import the Modal component

function Child(props) {
  return (
    <div>
      <button onClick={props.handleClick}>Show Modal</button>
      {props.showModal && <Modal />} {/* Display the Modal component if showModal is true */}
    </div>
  );
}

export default Child;
