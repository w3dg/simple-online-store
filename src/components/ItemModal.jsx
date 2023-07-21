import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { formatCurrency } from "../utils/formatCurrency";

export function ItemModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { image, price, title, description } = props;

  return (
    <>
      <Button variant="primary" onClick={handleShow} size="sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="expand-svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#FFFFFF"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M16 4l4 0l0 4"></path>
          <path d="M14 10l6 -6"></path>
          <path d="M8 20l-4 0l0 -4"></path>
          <path d="M4 20l6 -6"></path>
        </svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center py-2">
            <img src={image} alt="" style={{ objectFit: "cover", height: "13rem" }} />
          </div>
          <div>
            <p>{description}</p>

            <p className="h4">{formatCurrency(price)}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
