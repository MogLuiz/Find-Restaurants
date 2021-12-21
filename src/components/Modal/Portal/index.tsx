// Packages
import ReactDom from "react-dom";

const PortalModal: React.FC<JSX.Element> = ({ children }) => {
  const portal = document.getElementById("modal-root") as HTMLElement;
  return ReactDom.createPortal(children, portal);
};

export default PortalModal;
