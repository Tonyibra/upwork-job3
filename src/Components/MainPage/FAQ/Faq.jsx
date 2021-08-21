import React from "react";
import { AccordionBox } from "./Accordion/AccordionBox";
import "./Faq.scss";
import { data } from "./Data/questionsData";
export const Faq = () => {
  return (
    <div className="faqContainer" id="faq">
      <div className="faqHeader">
        <div className="faqTitle">
          <span>HOW IT WORKS</span>
        </div>
        <div className="faqSubTitle">
          <span>Just 3 Simple Steps</span>
        </div>
      </div>
      <div className="faqBody">
        {data?.map(({ title, details }, idx) => (
          <AccordionBox title={title} details={details} />
        ))}
      </div>
    </div>
  );
};
