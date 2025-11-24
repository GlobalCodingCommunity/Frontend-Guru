import { useState } from "react";

export default function Accordion({ sections }) {
  const [status, setStatus] = useState({
    html: false,
    css: false,
    js: false,
  });
  const handleClick = (type) => {
    setStatus((status) => ({ ...status, [type]: !status[type] }));
  };
  return (
    <div>
      {sections.map((section) => {
        const sectionStatus = status[section.value];
        return (
          <div key={section.value}>
            <div onClick={() => handleClick(section.value)}>
              {section.title}{" "}
              <span
                aria-hidden={sectionStatus}
                className={
                  sectionStatus
                    ? "accordion-icon accordion-icon--rotated"
                    : "accordion-icon"
                }
              />
            </div>
            <div hidden={!sectionStatus}>{section.contents}</div>
          </div>
        );
      })}
    </div>
  );
}
