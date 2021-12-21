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

const Modal: React.FC<IPropsModalComponent> = () => {
  return (
    <PortalModal>
      <Overlay>
        <DialogModal></DialogModal>
      </Overlay>
    </PortalModal>
  );
};

export default Modal;
