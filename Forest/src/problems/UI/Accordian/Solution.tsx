import { useState } from "react";
import "./styles.css";

const cords = [
  {
    id: "1",
    title: "HTML",
    body: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: "2",
    title: "CSS",
    body: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    id: "3",
    title: "Javascript",
    body: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

const CordComp = ({ title, body, isOpen, onClick }) => {
  return (
    <div>
      <div
        onClick={onClick}
        style={{
          cursor: "pointer",
        }}
      >
        <div>
          {title}{" "}
          <span
            aria-hidden={true}
            className={`accordion-icon ${
              isOpen ? "" : "accordion-icon--rotated"
            }`}
          />
        </div>
      </div>
      {isOpen && <div>{body}</div>}
    </div>
  );
};

export default function Accordion() {
  const [currentAccordian, setCurrentAccordian] = useState("");
  const toggleAccordian = (id) => {
    if (currentAccordian === id) return setCurrentAccordian("");
    setCurrentAccordian(id);
  };

  return (
    <div>
      {cords.map((cord) => {
        const isCurrent = currentAccordian === cord.id;
        return (
          <CordComp
            key={cord.id}
            title={cord.title}
            body={cord.body}
            isOpen={isCurrent}
            onClick={() => toggleAccordian(cord.id)}
          />
        );
      })}
    </div>
  );
}
