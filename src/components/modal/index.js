/* eslint-disable react/prop-types */
import React from 'react'

export default function Modal({ label, showModal, handleCloseModal, button, submit, children }) {
  return (
    <div
      className={`modal custom-modal-backdrop ${showModal ? 'd-block' : ''}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{label}</h5>
            <button type="button" className="close" onClick={handleCloseModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={submit}>
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
