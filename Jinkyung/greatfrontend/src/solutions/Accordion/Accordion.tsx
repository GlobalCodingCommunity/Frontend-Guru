import { useState } from "react";
import "./styles.css"
/**
 * Set 사용하기
 * 새로운 Set에 복사본 만들기
 * react가 state가 바뀌었다는걸 감지하게 하기 위함
 * set : 중복없이 관리하는 자료구조
 */
export default function Accordion({ sections }) {
  const [open, setOpen] = useState(new Set());
  return (
    <div className="accordion">
      {sections.map((section) => {
        const panelId = `panel-${section.value}`;
        const isOpen=open.has(section.value)
        return (
          <div key={section.value} className="accordion-item">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controlls={panelId}
              onClick={() => {
                const newOpen = new Set(open);
                if (newOpen.has(section.value)) {
                  newOpen.delete(section.value);
                } else {
                  newOpen.add(section.value);
                }
                setOpen(newOpen);
              }}
            >
              {section.value}
            </button>
            {open.has(section.value) && (
              <div className="accordion-contents" role="region" aria-labbeledby={section.value} id={panelId}>{section.contents}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
