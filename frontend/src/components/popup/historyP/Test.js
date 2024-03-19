import React, { useState, useRef, useEffect } from 'react';
import HistoryPoptest2 from './HistoryPoptest2';
import "./Test.css";
import HistoryPoptest from './HistoryPoptest';

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal">
        <HistoryPoptest2></HistoryPoptest2>
      </div>
    </div>
  );
};

const Test = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      
      <button onClick={openModal}>open</button>
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Test;