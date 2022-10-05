import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import s from './Modal.module.css';
const ModalWindow = ({ title = '', children = '' }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={s.modalBody}>{children}</Modal.Body>
      </Modal>

      <Button variant="primary" onClick={handleShow}>
        {title}
      </Button>
    </>
  );
};

export default ModalWindow;
