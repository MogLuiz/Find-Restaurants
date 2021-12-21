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
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    const onEsc = (event: any) => {
      if (event.keyCode === 27 && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  // -------------------------------------------------
  // Conditions
  // -------------------------------------------------

  if (!open) return null;

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
