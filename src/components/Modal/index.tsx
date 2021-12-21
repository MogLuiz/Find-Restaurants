// Packages
import React, { ReactNode } from "react";

// React Portal
import PortalModal from "./Portal";

// Styles
import { DialogModal, Overlay } from "./styles";

interface IPropsModalComponent {
  children: ReactNode;
  open: boolean;
  onClose: () => boolean;
}

const Modal: React.FC<IPropsModalComponent> = ({ children, onClose, open }) => {
  // -------------------------------------------------
  // Render
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
