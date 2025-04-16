import { useState } from "react";
//import "../styles/components/_collapse.scss";
import arrowIcon from "../assets/arrow-back-ios.svg";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? "open" : "closed"}`}>
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <img
          src={arrowIcon}
          alt="Icône flèche"
          className={`collapse__icon ${isOpen ? "rotate" : ""}`}
        />
      </div>

      <div className={`collapse__content-wrapper ${isOpen ? "open" : ""}`}>
        <div className="collapse__content">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
