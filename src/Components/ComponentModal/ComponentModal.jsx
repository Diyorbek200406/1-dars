import React, { useState } from "react";
import "./ComponentModal.scss";
const ComponentModal = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true);
  };
  const handleModalClose = () => {
    setModal(false);
  };
  return (
    <div>
      <div className={modal ? "modale on" : "modale no"}>
        <form className="form form-control">
          <input className="form-control" type="text" placeholder="Typing..." />
          <button type="button" className="btn-primary btn form-control">
            Submit
          </button>
          <button
            onClick={handleModalClose}
            type="button"
            className="btn-primary btn form-control"
          >
            Back
          </button>
        </form>
      </div>
      <div className="modals">
        <button className="btn btn-success" onClick={handleModal}>
          Modals
        </button>
      </div>
    </div>
  );
};

export default ComponentModal;
