import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isCallConnected, setIsCallConnected] = useState(false);
  const [time, setTime] = useState(0);
  const [breakReason, setBreakReason] = useState("");

  return (
    <AppContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        showModal,
        setShowModal,
        isCallConnected,
        setIsCallConnected,
        breakReason,
        setBreakReason,
        time,
        setTime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
