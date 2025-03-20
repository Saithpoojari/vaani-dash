import React from 'react';
import { useAppContext } from '../context/AppContext';
import AgentStatus from './AgentStatus';
import CallControls from './CallControls';

function Sidebar() {
  const { isPlaying, setIsPlaying, setShowModal, isCallConnected, setIsCallConnected, setBreakReason } = useAppContext();

  const handlePlayPause = (e) => {
    e.preventDefault();
    console.log('Before toggle - isPlaying:', isPlaying);
    if (isPlaying) {
      // If currently playing (pause icon is shown), switch to "not playing" (play icon)
      setIsPlaying(false);
      setShowModal(true); // Open the modal to select a break reason
      setBreakReason(''); // Clear the break reason
    } else {
      // If currently not playing (play icon is shown), switch to "playing" (pause icon)
      setIsPlaying(true);
      setShowModal(false); // Close the modal if it's open
    }
    // console.log('After toggle - isPlaying:', !isPlaying);
  };

  const handleCallConnect = () => {
    setIsCallConnected(true);
  };

  return (
    <aside className="sidebar">
      <a href="/" className="logo justify-content-center">
        <img src="/img/vaani-logo-w.png" style={{ width: '140px' }} alt="Vaani Logo" />
      </a>
      <div className="nav-menu d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-between">
          <div className="agent-container">
            <div className="btn-box">
              {isPlaying ? (
                <a
                  id="pauseBtn"
                  className="control-btn pause-btn"
                  href="#"
                  onClick={handlePlayPause}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Pause"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 47.607 47.607"
                  >
                    <path
                      d="M17.991 40.976a6.631 6.631 0 0 1-13.262 0V6.631a6.631 6.631 0 0 1 13.262 0v34.345zM42.877 40.976a6.631 6.631 0 0 1-13.262 0V6.631a6.631 6.631 0 0 1 13.262 0v34.345z"
                    />
                  </svg>
                </a>
              ) : (
                <a
                  id="playBtn"
                  className="control-btn play-btn"
                  href="#"
                  onClick={handlePlayPause}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Ready"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 320.001 320.001"
                  >
                    <path
                      d="m295.84 146.049-256-144a16.026 16.026 0 0 0-15.904.128A15.986 15.986 0 0 0 16 16.001v288a15.986 15.986 0 0 0 7.936 13.824A16.144 16.144 0 0 0 32 320.001c2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z"
                    />
                  </svg>
                </a>
              )}
            </div>
            <AgentStatus />
            <CallControls />
            {!isCallConnected && (
              <button onClick={handleCallConnect} className="btn btn-primary w-100 mt-3 d-none">
                Simulate Call
              </button>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;