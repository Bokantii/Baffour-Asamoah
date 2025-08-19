import React, { useState } from "react";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.accordion} ${isActive ? styles.active : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        {title}
      </button>
      <div
        className={styles.panel}
        style={{ display: isActive ? "block" : "none" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
