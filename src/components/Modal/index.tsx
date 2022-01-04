// Packages
import React, { ReactNode, useEffect } from "react";

// Hooks
import { useDispatch } from "react-redux";

// Actions
import { setSelectedRestaurant } from "../../store/modules/restaurants/actions";

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

  const dispatch = useDispatch();

  useEffect(() => {
    const onEsc = (event: any) => {
      if (event.keyCode === 27 && open) {
        dispatch(setSelectedRestaurant(null));
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
    dispatch(setSelectedRestaurant(null));
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
        <DialogModal onClick={handleDialogModalClick}>{children}</DialogModal>
      </Overlay>
    </PortalModal>
  );
};

export default Modal;
