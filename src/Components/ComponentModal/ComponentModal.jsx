import React, { useState } from "react";
import "./ComponentModal.scss";

const ComponentModal = (i) => {
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
          <button type="submit" className="btn-primary btn form-control">
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
        <button id={i.i} className="btn w-100" onClick={handleModal}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ComponentModal;
