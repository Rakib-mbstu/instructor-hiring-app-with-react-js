import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";

const InputModal = ({ name }) => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const notify = () => {
    setShow(false);
    toast.success("Sccessfully Booked an Appointment", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleSubmit = () => {
    // closeModal();
    notify();
  };
  return (
    <div>
      <Button variant="primary" onClick={showModal}>
        BOOK NOW
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header style={{ backgroundColor: "aqua" }} closeButton>
          <Modal.Title>
            <h2>To Request a Session with {name}</h2>Enter Your Details...!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup className="mb-3">
              <Form.Label>Enter Your Name:</Form.Label>
              <Form.Control type="text" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" placeholder="+8801" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label>Mail</Form.Label>
              <Form.Control type="mail" placeholder="abc@mail.com" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Short notes on what you would like to learn....."
                rows={3}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Enter Prefered Date and Time</FormLabel>
              <FormControl type="datetime-local"></FormControl>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Button
          style={{ backgroundColor: "aqua", color: "black" }}
          onClick={handleSubmit}
        >
          <h4>SUBMIT REQUEST</h4>
        </Button>
      </Modal>
    </div>
  );
};

export default InputModal;
