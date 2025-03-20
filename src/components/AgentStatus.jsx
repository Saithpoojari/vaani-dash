import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

function AgentStatus() {
  const { isPlaying, time, setTime, breakReason } = useAppContext();

//   console.log('AgentStatus - isPlaying:', isPlaying, 'breakReason:', breakReason);

  // Updated status logic
  const status = breakReason
    ? `Pause - ${breakReason}` // Show "Pause - [Break Reason]" if a break reason is set
    : isPlaying
      ? 'Ready' // Show "Ready" if isPlaying is true and no break reason
      : 'Login'; // Show "Login" if isPlaying is false and no break reason

//   console.log('AgentStatus - calculated status:', status);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [setTime]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="agent-status-container">
      <div id="agentStatus" className={`agent-status ${status.toLowerCase().replace(' ', '-')}-status`}>
        <div role="agent-status-container">
          <span id="agentStatusIcon">
            {status === 'Login' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 510 510"
              >
                <path
                  d="M289.709 431.083c-36.265 0-71.06-10.992-100.623-31.786-28.893-20.323-50.744-48.461-63.19-81.373-2.442-6.457.813-13.671 7.27-16.114 6.453-2.441 13.672.813 16.113 7.27 21.943 58.02 78.378 97.002 140.431 97.002 82.757 0 150.084-67.327 150.084-150.083S372.467 105.916 289.71 105.916c-62.052 0-118.486 38.982-140.43 97.001-2.441 6.457-9.657 9.712-16.113 7.27-6.457-2.442-9.712-9.657-7.27-16.114 12.446-32.911 34.298-61.048 63.19-81.371 29.563-20.795 64.357-31.786 100.622-31.786 96.542 0 175.084 78.542 175.084 175.083s-78.542 175.084-175.084 175.084zm8.838-183.923-57.5-57.5c-4.88-4.88-12.8-4.88-17.68 0a12.426 12.426 0 0 0-3.63 8v45.84H59.707c-6.9 0-12.5 5.6-12.5 12.5s5.6 12.5 12.5 12.5h160.03v45.84c.19 2.91 1.4 5.77 3.63 8 2.44 2.44 5.64 3.66 8.84 3.66s6.4-1.22 8.84-3.66l57.5-57.5c4.88-4.88 4.88-12.8 0-17.68z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  d="M13 41a4.722 4.722 0 0 1-2.386-.653 4.528 4.528 0 0 1-2.28-3.938V11.588a4.528 4.528 0 0 1 2.28-3.938 4.685 4.685 0 0 1 4.711-.036l22 12.412a4.543 4.543 0 0 1 0 7.948l-22 12.412A4.731 4.731 0 0 1 13 41zm0-32a2.715 2.715 0 0 0-1.377.377 2.546 2.546 0 0 0-1.289 2.211v24.824a2.546 2.546 0 0 0 1.289 2.211 2.707 2.707 0 0 0 2.72.021l22-12.412a2.542 2.542 0 0 0 0-4.464l-22-12.412A2.736 2.736 0 0 0 13 9z"
                />
              </svg>
            )}
          </span>
          <span id="agentStatusText">{status}</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
          >
            <path
              d="M12.5 2A10.5 10.5 0 1 0 23 12.5 10.51 10.51 0 0 0 12.5 2zm0 20a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5z"
            />
            <path
              d="m16 13.13-3-1V6.5a.5.5 0 0 0-1 0v6a.49.49 0 0 0 .34.47l3.32 1.11a.41.41 0 0 0 .16 0 .5.5 0 0 0 .47-.35.49.49 0 0 0-.29-.6z"
            />
          </svg>
          <time id="loginTime">{formatTime(time)}</time>
        </div>
      </div>
    </div>
  );
}

export default AgentStatus;