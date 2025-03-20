import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function BreakModal() {
  const { showModal, setShowModal, setBreakReason, setIsPlaying } = useAppContext();
  const [selectedReason, setSelectedReason] = useState('');

  if (!showModal) {
    return null;
  }

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleRadioChange = (e) => {
    const reason = e.target.value;
    // console.log('Selected reason:', reason);
    setSelectedReason(reason);

    // Save the break reason, set isPlaying to false, and close the modal
    setBreakReason(reason);
    setIsPlaying(false); // Set isPlaying to false to show the play icon
    console.log('Saved break reason to context:', reason);
    setShowModal(false); // Close the modal immediately
  };

  return (
    <>
      <div
        className={`modal fade ${showModal ? 'show d-block' : ''}`}
        id="breakModal"
        tabIndex="-1"
        aria-labelledby="breakModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog">
          <div className="modal-content" onClick={handleModalClick}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="breakModalLabel">
                Break Reason
              </h1>
            </div>
            <div className="modal-body">
              <div className="form-check">
                <input
                  className="form-check-input pauseCodes"
                  type="radio"
                  name="exampleRadios"
                  id="teaBreak"
                  value="Tea Break"
                  onChange={handleRadioChange}
                  checked={selectedReason === 'Tea Break'}
                />
                <label className="form-check-label" htmlFor="teaBreak">
                  Tea Break
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input pauseCodes"
                  type="radio"
                  name="exampleRadios"
                  id="bioBreak"
                  value="Bio"
                  onChange={handleRadioChange}
                  checked={selectedReason === 'Bio'}
                />
                <label className="form-check-label" htmlFor="bioBreak">
                  Bio
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setShowModal(false)} // Close the modal without saving if the user clicks "Close"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal-backdrop fade ${showModal ? 'show' : ''}`}
        onClick={() => setShowModal(false)}
      />
    </>
  );
}

export default BreakModal;