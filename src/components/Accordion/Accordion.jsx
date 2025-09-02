import React, { useState } from "react";
import classes from "./Accordion.module.scss";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className={classes.accordionItem}>
      <button className={classes.accordionToggle} onClick={onToggle}>
        <span>{title}</span>
        <span className={classes.accordionIcon}>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className={classes.accordionContent}>{content}</div>}
    </div>
  );
};

const Accordion = ({ items, heading }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={classes.accordion}>
      {heading && <h2 className={classes.title}>{heading}</h2>}

      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
