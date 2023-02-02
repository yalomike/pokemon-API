import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/esm/CloseButton";
// import { useParams } from "react-router-dom";

export default function MainModal({ isOpen, closeModal, currentPokemonId }) {
  const { id } = currentPokemonId;

  const outsideClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Modal show={isOpen} onClick={outsideClick}>
        <Modal.Header>
          <Modal.Title>POKEMON</Modal.Title>
          <CloseButton aria-label="close-modal" onClick={closeModal} />
        </Modal.Header>

        <Modal.Body>
          <p>ABARAJAME LA BANERA NENA!</p>
          <p>TU VIEJA EN TANGA</p>

          <div className="pokemon-container text-center pt-5">
            <div className="content text-uppercase text-dark">
              <h1>#{id.order}</h1>
            </div>
            <div className="content text-uppercase text-dark">
              <h1>{id.name}</h1>
            </div>
            <div className="content text-uppercase text-dark">
              <h1>Weight:{id.weight}kg</h1>
            </div>
            <div className="content text-uppercase text-dark">
              <h1>Height:{id.height}</h1>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
