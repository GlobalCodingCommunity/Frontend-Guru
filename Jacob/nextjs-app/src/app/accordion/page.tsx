"use client";

import Wrapper from "@/components/Wrapper";
import { useState } from "react";

const AccordionComponent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [fold, setFold] = useState(false);

  return (
    <div>
      <div onClick={() => setFold((prev) => !prev)}>
        {title} <span aria-hidden={true} className="accordion-icon" />
      </div>
      <div className={fold ? "visible" : "hidden"}>{content}</div>
    </div>
  );
};

export default function Accordion() {
  const accordionValue = [
    {
      id: 1,
      title: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 2,
      title: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      id: 3,
      title: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  return (
    <Wrapper title="Accordion">
      {accordionValue.map((value) => (
        <AccordionComponent
          key={value.id}
          title={value.title}
          content={value.content}
        />
      ))}
    </Wrapper>
  );
}
