// Packages
import { ReactNode } from "react";

// Types
import ReactDom from "react-dom";

const PortalModal: React.FC<ReactNode> = ({ children }) => {
  const portal = document.getElementById("modal-root") as HTMLElement;
  return ReactDom.createPortal(children, portal);
};

export default PortalModal;
