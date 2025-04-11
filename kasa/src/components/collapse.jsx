import { useState } from "react";
import "../styles/components/_collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "up" : "down"}`}>⌃</span>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
