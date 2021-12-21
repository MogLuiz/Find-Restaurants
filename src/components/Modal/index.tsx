// Packages
import React, { ReactNode, useEffect } from "react";

// React Portal
import PortalModal from "./Portal";

// Styles
import { DialogModal, Overlay } from "./styles";

interface IPropsModalComponent {
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<IPropsModalComponent> = ({ children, onClose, open }) => {
  // -------------------------------------------------
  // Conditions
  // -------------------------------------------------
  if (!open) return null;

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    const onEsc = (e: any) => {
      if (e.keyCode === 27) onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("keydown", onEsc);
    };
  }, []);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------
  const handleOverlayClick = () => {
    onClose();
  };

  const handleDialogModalClick = (e: any) => {
    e.stopPropagation();
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <PortalModal>
      <Overlay onClick={handleOverlayClick}>
        <DialogModal onClick={handleDialogModalClick}></DialogModal>
      </Overlay>
    </PortalModal>
  );
};

export default Modal;
