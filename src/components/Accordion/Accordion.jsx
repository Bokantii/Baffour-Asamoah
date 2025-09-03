import React, { useState } from "react";
import classes from "./Accordion.module.scss";
import ScrollFadeIn from './../ScrollFadeIn/ScrollFadeIn';
const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (<ScrollFadeIn> <div className={classes.accordionItem}>
      
      <button className={classes.accordionToggle} onClick={onToggle}>
        <span>{title}</span>
        <span className={classes.accordionIcon}>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className={classes.accordionContent}>{content}</div>}
    </div></ScrollFadeIn>
   
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
