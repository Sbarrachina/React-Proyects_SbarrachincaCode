import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, showModalHandler, closeModalHandler }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Hook personalizado modal en cualquier lugar de nuestra aplicación
export const useModalContext = () => {
  return useContext(ModalContext);
};
